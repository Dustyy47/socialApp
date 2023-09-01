import { Empty } from '@src/components/atomic/Empty/Empty';
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
    <div className={styles.wrapper}>
      {videos.length === 0 ? (
        <Empty>Нет видео</Empty>
      ) : (
        <>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </>
      )}
    </div>
  );
}
