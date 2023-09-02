import { ConsultationIcon } from '@src/components/atomic/ConsultationIcon/ConsultationIcon';
import { ProfileCard } from '@src/components/atomic/ProfileCard/ProfileCard';
import { IConsulation } from '@src/types';
import styles from './ConsultationCard.module.scss';

export function ConsultationCard({
  consultation
}: {
  consultation: IConsulation;
}) {
  return (
    <ProfileCard className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <ConsultationIcon type={consultation.type} />
        <div className={styles.centerWrapper}>
          <p className={styles.title}>{consultation.title}</p>
          <p className={styles.timeAndDate}>
            <span>{consultation.date}</span>,
            <span>{consultation.time.start}</span>
          </p>
        </div>
      </div>
      {!consultation.confirmed && (
        <div className={styles.statusWrapper}>Не подтверждена</div>
      )}
    </ProfileCard>
  );
}
