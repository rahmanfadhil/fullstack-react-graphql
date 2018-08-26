import { ContextParameters } from "graphql-yoga/dist/types";
import { ITokenPayload, IContext } from "./resolvers/types";
import { User } from "./entity/User";
import * as jwt from "jsonwebtoken";

export default async ({ request, response }: ContextParameters) => {
  if (request.headers.authorization) {
    try {
      const { id, email }: ITokenPayload = jwt.verify(
        request.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET || "secret"
      ) as ITokenPayload;
      const user = await User.findOne({ where: { id, email } });
      if (!user) throw new Error("Token not valid!");
      return { req: request, res: response, user };
    } catch (err) {
      throw new Error("Token not valid!");
    }
  }
  return { req: request, res: response };
};
