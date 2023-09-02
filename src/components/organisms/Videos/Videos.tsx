import { ProfileSectionWrapper } from '@src/components/molecular/ProfileSectionWrapper/ProfileSectionWrapper';
import { VideoCard } from '@src/components/molecular/VideoCard/VideoCard';
import { mockVideos } from '@src/mock';
import { IVideo } from '@src/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Videos.module.scss';

export function Videos() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) setVideos(mockVideos[id] ?? []);
  }, [id]);
  return (
    <ProfileSectionWrapper
      emptyLabel='Нет видео'
      isEmpty={videos.length === 0}
      className={styles.wrapper}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ProfileSectionWrapper>
  );
}
