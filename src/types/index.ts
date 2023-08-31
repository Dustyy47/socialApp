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

export interface IFullUserInfo {
  user: IUser
  notes: INote[]
  consulations: IConsulation[]
  videos: IVideo[]
  events: IEvent[]
}

export interface INote {
  date: string
  content: string
}

export type ConsultationType = "online" | "offline"
export type IConsulationStatus = ""

export interface IConsulation{
  id: string
  type: ConsultationType 
  date: string
  time: {
    start: string
    end: string
  }
}

export interface IVideo{
  id: string
  preview: string,
  title: string
  author: string
  dates: {
    start: string
    end: string
  }
}


export type EventType = "web"
export interface IEvent{
  id: string
  type: EventType
  date: string
  time: string
}

export type IUserStatus = "newNote" | "alert";
