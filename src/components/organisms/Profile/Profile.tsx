import { UserInfo } from '@src/components/molecular/UserInfo/UserInfo';
import { mockUsersCards } from '@src/mock';
import { Outlet, useParams } from 'react-router-dom';

export function Profile() {
  const { id } = useParams();

  const activeUserCard = mockUsersCards.find((card) => card.user.id === id);

  return (
    <div>
      {activeUserCard && <UserInfo user={activeUserCard.user} />}
      <Outlet />
    </div>
  );
}
