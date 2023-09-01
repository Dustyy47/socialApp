import { Empty } from '@src/components/atomic/Empty/Empty';
import { Note } from '@src/components/molecular/Note/Note';
import { mockNotes } from '@src/mock';
import { INote } from '@src/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Notes.module.scss';

function Notes() {
  const [notes, setNotes] = useState<INote[]>([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) setNotes(mockNotes[id] ?? []);
  }, [id]);
  return (
    <div className={styles.wrapper}>
      {notes.length === 0 ? (
        <Empty>Нет заметок</Empty>
      ) : (
        <div>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Notes;
