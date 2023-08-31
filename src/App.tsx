import '@src/styles/globals.scss';
import { UserInfo } from './components/molecular/UserInfo/UserInfo';
import Header from './components/organisms/Header/Header';
import { UsersList } from './components/organisms/UsersList/UsersList';
import { IUser, IUserCard } from './types';
import { useMemo, useState } from 'react';

const link =
  'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1296346667/image_1296346667.jpg?io=getty-c-w1536';

const mockUsersCards: IUserCard[] = [
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

export function App() {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const activeUser = mockUsersCards.find(
    (card) => card.user.id === activeUserId
  );

  return (
    <>
      <Header />
      <main className='wrapper container'>
        <div className='list'>
          <UsersList
            setActiveUserId={setActiveUserId}
            activeUserId={activeUserId}
            userCards={mockUsersCards}
          ></UsersList>
        </div>
        {/* <UserCard user={mockUser} status="newNote" /> */}
        <div className='profile'>
          {activeUser && <UserInfo user={activeUser.user} />}
        </div>
      </main>
    </>
  );
}
