import { Avatar } from '@src/components/atomic/Avatar/Avatar';
import { Card } from '@src/components/atomic/Card/Card';
import { Checkbox } from '@src/components/atomic/Checkbox/Checkbox';
import UserStatus from '@src/components/atomic/UserStatus/UserStatus';
import { IUser, IUserStatus } from '@src/types';
import styles from './UserCard.module.scss';
import clsx from 'clsx';

export function UserCard({
  user,
  status,
  isChecked,
  showCheckbox,
  onCheck,
  onClick,
  isActive = false
}: {
  user: IUser;
  status: IUserStatus;
  isChecked: boolean;
  showCheckbox: boolean;
  onClick: () => void;
  onCheck: (v: boolean) => void;
  isActive?: boolean;
}) {
  return (
    <Card
      onClick={onClick}
      className={clsx(styles.wrapper, isActive && styles['wrapper--active'])}
    >
      <div className={styles.contentWrapper}>
        {showCheckbox && <Checkbox isChecked={isChecked} onToggle={onCheck} />}
        <div className={styles.avatarWrapper}>
          <Avatar src={user.avatarUrl} alt={user.name} />
        </div>
        <p className='name'>{user.name}</p>
      </div>
      <div>
        <UserStatus status={status} />
      </div>
    </Card>
  );
}

export default UserCard;
