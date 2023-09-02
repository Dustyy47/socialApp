import { Avatar } from '@src/components/atomic/Avatar/Avatar';
import { Card } from '@src/components/atomic/Card/Card';
import { getAgeSuffix } from '@src/helpers';
import { IUser } from '@src/types';
import { Options } from '../Options/Options';
import styles from './UserInfo.module.scss';

export function UserInfo({ user }: { user: IUser }) {
  const ageLabel = user.age + ' ' + getAgeSuffix(user.age);
  const genderLabel = user.gender === 'male' ? 'муж' : 'жен';

  return (
    <Card className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar src={user.avatarUrl} alt='user profile' />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.name}>
            {user.lastname} {user.firstname} {user.patronymic}
          </p>
          <p className={styles.description}>
            {ageLabel},{genderLabel}
          </p>
        </div>
      </div>
      <Options />
    </Card>
  );
}
