import { ConsultationCard } from '@src/components/molecular/ConsultationCard/ConsultationCard';
import { ProfileSectionWrapper } from '@src/components/molecular/ProfileSectionWrapper/ProfileSectionWrapper';
import { mockConsultations } from '@src/mock';
import { IConsulation } from '@src/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Consultations.module.scss';

export function Consultations() {
  const [consultations, setConsultations] = useState<IConsulation[]>([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) setConsultations(mockConsultations[id] ?? []);
  }, [id]);

  return (
    <ProfileSectionWrapper
      emptyLabel='Нет консультаций'
      isEmpty={consultations.length === 0}
      className={styles.wrapper}
    >
      {consultations.map((consultation) => (
        <ConsultationCard consultation={consultation} key={consultation.id} />
      ))}
    </ProfileSectionWrapper>
  );
}
