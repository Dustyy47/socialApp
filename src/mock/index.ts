import { IConsulation, IEvent, INote, IUserCard, IVideo } from '@src/types';

const link =
  'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1296346667/image_1296346667.jpg?io=getty-c-w1536';

export const mockUsersCards: IUserCard[] = [
  {
    user: {
      id: '1',
      age: 20,
      avatarUrl: '/images/1.png',
      gender: 'female',
      lastname: 'Кравцова',
      firstname: 'Александра',
      patronymic: 'Александровна'
    },
    status: 'newNote'
  },
  {
    user: {
      id: '2',
      age: 30,
      avatarUrl: '/images/2.png',
      gender: 'male',
      lastname: 'Рожков',
      firstname: 'Денис',
      patronymic: 'Петрович'
    },
    status: 'idle'
  },
  {
    user: {
      id: '3',
      age: 20,
      avatarUrl: '/images/1.png',
      gender: 'female',
      lastname: 'Кравцова',
      firstname: 'Александра',
      patronymic: 'Александровна'
    },
    status: 'alert'
  },
  {
    user: {
      id: '4',
      age: 20,
      avatarUrl: '/images/3.png',
      gender: 'female',
      lastname: 'Диброва',
      firstname: 'Алевтина',
      patronymic: 'Александровна'
    },
    status: 'idle'
  },
  {
    user: {
      id: '5',
      age: 20,
      avatarUrl: '/images/4.png',
      gender: 'female',
      lastname: 'Форс',
      firstname: 'Александр',
      patronymic: 'Александрович'
    },
    status: 'idle'
  },
  {
    user: {
      id: '6',
      age: 20,
      avatarUrl: '/images/5.png',
      gender: 'female',
      lastname: 'Ахмедов',
      firstname: 'Тимур',
      patronymic: 'Александрович'
    },
    status: 'idle'
  },
  {
    user: {
      id: '7',
      age: 50,
      avatarUrl: '/images/6.png',
      gender: 'female',
      lastname: 'Блажевич',
      firstname: 'Игорь',
      patronymic: 'Александрович'
    },
    status: 'idle'
  },

  {
    user: {
      id: '8',
      age: 25,
      avatarUrl: '/images/8.png',
      gender: 'female',
      lastname: 'Валиева',
      firstname: 'Руфина',
      patronymic: 'Александровна'
    },
    status: 'idle'
  },
  {
    user: {
      id: '9',
      age: 25,
      avatarUrl: '/images/9.png',
      gender: 'female',
      lastname: 'Волошина',
      firstname: 'Виктория',
      patronymic: 'Александровна'
    },
    status: 'idle'
  }
];

export const mockNotes: Record<string, INote[]> = {
  '2': [
    {
      id: '123-2',
      content:
        'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '20.12.2019',
      images: []
    },
    {
      id: '123-1',
      content:
        'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      date: '20.12.2019',
      images: ['/images/note1.png']
    }
  ]
};

export const mockVideos: Record<string, IVideo[]> = {
  '2': [
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
  '2': [
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
  '2': [
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
