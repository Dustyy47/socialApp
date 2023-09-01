import { UsersList } from '@src/components/organisms/UsersList/UsersList';
import { mockUsersCards } from '@src/mock';
import { Outlet } from 'react-router-dom';

function Foo() {
  console.log('foo');
  return <div>123</div>;
}

export function UsersPage() {
  return (
    <>
      <div className='list'>
        <UsersList userCards={mockUsersCards} />
      </div>
      <div className='profile'>
        <Outlet />
      </div>
    </>
  );
}
