import { User } from "../../entity/User";

export interface ILoginPayload {
  token: string;
  user: User;
}

export interface ICreateUserArgs {
  full_name: string;
  email: string;
  password: string;
}

export interface ILoginUserArgs {
  email: string;
  password: string;
}

export interface IAllUsersArgs {
  page: number;
  take: number;
}
