import { EventCard } from '@src/components/molecular/EventCard/EventCard';
import { mockEvents } from '@src/mock';
import { IEvent } from '@src/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Events.module.scss';

export function Events() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) setEvents(mockEvents[id] ?? []);
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}
