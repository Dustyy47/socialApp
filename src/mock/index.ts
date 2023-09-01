import { IUserCard } from "@src/types";

const link =
  'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1296346667/image_1296346667.jpg?io=getty-c-w1536';


export const mockUsersCards: IUserCard[] = [
    {
      user: {
        id: '123',
        age: 30,
        avatarUrl: link,
        gender: 'male',
        name: 'Алтаев Денис Петрович'
      },
      status: 'newNote'
    },
    {
      user: {
        id: '1232',
        age: 301,
        avatarUrl: link,
        gender: 'male',
        name: 'Бананин  Денис Петрович'
      },
      status: 'alert'
    }
  ];