import { EventIcon } from '@src/components/atomic/EventIcon/EventIcon';
import { ProfileCard } from '@src/components/atomic/ProfileCard/ProfileCard';
import { Thumbnail } from '@src/components/atomic/Thumbnail/Thumbnail';
import { IEvent } from '@src/types';
import styles from './EventCard.module.scss';

export const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <ProfileCard className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Thumbnail alt={event.title} src={event.thumbnail} />
        <div className={styles.centerWrapper}>
          <p className={styles.title}>{event.title}</p>
          <div className={styles.descriptionWrapper}>
            <EventIcon text='Вебинар' type={event.type} />
            <EventIcon text={event.date} type={'date'} />
            <EventIcon text={event.time} type={'time'} />
          </div>
        </div>
      </div>
    </ProfileCard>
  );
};
