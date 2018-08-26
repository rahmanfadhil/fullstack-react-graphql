import { User } from "../entity/User";

export interface IResolversMap {
  [key: string]: {
    [key: string]: (
      _: any,
      args: any,
      context: any,
      info: any
    ) => any | Promise<any>;
  };
}

export interface ITokenPayload {
  id: number;
  email: string;
}

export interface IContext {
  req: Request;
  res: Response;
  user: User;
}
