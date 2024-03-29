export interface IUser {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  age: number;
  gender: 'male' | 'female';
  avatarUrl: string;
}

export interface IUserCard {
  user: IUser;
  status: IUserStatus;
}

export interface IFullUserInfo {
  user: IUser;
  notes: INote[];
  consulations: IConsulation[];
  videos: IVideo[];
  events: IEvent[];
}

export interface INote {
  id: string;
  date: string;
  content: string;
  images: string[];
}

export type ConsultationType = 'online' | 'offline';
export type IConsulationStatus = '';

export interface IConsulation {
  id: string;
  title: string;
  type: ConsultationType;
  confirmed: boolean;
  date: string;
  time: {
    start: string;
    end: string;
  };
}

export interface IVideo {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  dates: {
    start: string;
    end: string;
  };
}

export type EventType = 'web';
export interface IEvent {
  id: string;
  title: string;
  thumbnail: string;
  type: EventType;
  date: string;
  time: string;
}

export type IUserStatus = 'newNote' | 'alert' | 'idle';
