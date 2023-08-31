export interface IUser {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female";
  avatarUrl: string;
}

export interface IUserCard {
  user: IUser;
  status: IUserStatus;
}

export type IUserStatus = "newNote" | "alert";
