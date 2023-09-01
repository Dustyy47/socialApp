import { ProfileCard } from '@src/components/atomic/ProfileCard/ProfileCard';
import { Thumbnail } from '@src/components/atomic/Thumbnail/Thumbnail';
import { IVideo } from '@src/types';
import styles from './VideoCard.module.scss';

export function VideoCard({ video }: { video: IVideo }) {
  return (
    <ProfileCard className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Thumbnail alt={video.title} src={video.thumbnail} />
        <div className={styles.textWrapper}>
          <p className={styles.title}>{video.title}</p>
          <p className={styles.author}>{video.author}</p>
        </div>
      </div>
      <div className={styles.datesWrapper}>
        <p className={styles.dates}>
          {video.dates.start}-{video.dates.end}
        </p>
      </div>
    </ProfileCard>
  );
}
