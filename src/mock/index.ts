import { IConsulation, IEvent, INote, IUserCard, IVideo } from '@src/types';

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

export const mockNotes: Record<string, INote[]> = {
  '123': [
    {
      id: '123-1',
      content:
        'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '20.12.2019'
    },
    {
      id: '123-2',
      content:
        'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '20.12.2019'
    }
  ]
};

export const mockVideos: Record<string, IVideo[]> = {
  '123': [
    {
      id: '123-1',
      author: 'Астахова А.А',
      dates: {
        start: '15.01.2019',
        end: '22.01.2019'
      },
      thumbnail: link,
      title:
        'Крабик, ходьба в бок в приседе с двумя резинками Крабиком Крабиком Крабиком'
    },
    {
      id: '123-2',
      author: 'Астахова А.А',
      dates: {
        start: '15.01.2019',
        end: '22.01.2019'
      },
      thumbnail: link,
      title: 'Разминка для локтевого сустава'
    }
  ]
};

export const mockEvents: Record<string, IEvent[]> = {
  '123': [
    {
      date: '9 марта 2021',
      id: '123-1',
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
      time: '17:00',
      type: 'web',
      thumbnail: link
    },
    {
      date: '9 марта 2021',
      id: '123-2',
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
      time: '17:00',
      type: 'web',
      thumbnail: link
    }
  ]
};

export const mockConsultations: Record<string, IConsulation[]> = {
  '123': [
    {
      id: '123-1',
      title: 'Online консультация',
      date: '15.01.2019',
      time: {
        start: '12:30',
        end: '13:00'
      },
      confirmed: true,
      type: 'online'
    },
    {
      id: '123-2',
      title: 'Online консультация',
      date: '15.01.2019',
      time: {
        start: '12:30',
        end: '13:00'
      },
      confirmed: true,
      type: 'online'
    },
    {
      id: '123-3',
      title: 'Личный приём',
      date: '15.01.2019',
      time: {
        start: '12:30',
        end: '13:00'
      },
      confirmed: false,
      type: 'offline'
    }
  ]
};
