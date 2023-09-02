import { Note } from '@src/components/molecular/Note/Note';
import { ProfileSectionWrapper } from '@src/components/molecular/ProfileSectionWrapper/ProfileSectionWrapper';
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
    <ProfileSectionWrapper
      emptyLabel='Нет заметок'
      isEmpty={notes.length === 0}
      className={styles.wrapper}
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ProfileSectionWrapper>
  );
}

export default Notes;
