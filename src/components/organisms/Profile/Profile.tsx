import { Card } from '@src/components/atomic/Card/Card';
import { Navbar } from '@src/components/molecular/Navbar/Navbar';
import { UserInfo } from '@src/components/molecular/UserInfo/UserInfo';
import { mockUsersCards } from '@src/mock';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styles from './Profile.module.scss';

export function Profile() {
  const { id } = useParams();

  const activeUserCard = mockUsersCards.find((card) => card.user.id === id);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {activeUserCard && (
        <>
          <UserInfo user={activeUserCard.user} />
          <Navbar />
        </>
      )}
      <Card className={styles.outletWrapper}>
        <Outlet />
      </Card>
    </div>
  );
}
