import { User } from "../../entity/User";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import {
  IAllUsersArgs,
  ICreateUserArgs,
  ILoginPayload,
  ILoginUserArgs
} from "./user_types";
import { IResolversMap } from "../types";

const resolvers: IResolversMap = {
  Query: {
    allUsers: async (
      _,
      { page = 1, take = 10 }: IAllUsersArgs
    ): Promise<User[]> => {
      if (take > 100) throw new Error("Maximum take is 100");
      return await User.find({ skip: (page - 1) * take, take });
    }
  },
  Mutation: {
    createUserWithEmail: async (
      _,
      { email, password, full_name }: ICreateUserArgs
    ): Promise<ILoginPayload> => {
      const checkEmail = await User.findOne({
        where: { email, provider: "email" }
      });
      if (checkEmail) throw new Error("E-Mail already exist!");
      const hash = hashSync(password, genSaltSync(10));
      const user = await User.create({
        full_name,
        email,
        password: hash,
        provider: "email"
      }).save();
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || "secret"
      );
      return { token, user };
    },
    loginWithEmail: async (
      _,
      { email, password }: ILoginUserArgs
    ): Promise<ILoginPayload> => {
      const user = await User.findOne({ where: { email, provider: "email" } });
      if (!user) throw new Error("E-Mail not found!");
      const result = compareSync(password, user.password);
      if (!result) throw new Error("Password invalid!");
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || "secret"
      );
      return { token, user };
    }
  }
};

export default resolvers;
