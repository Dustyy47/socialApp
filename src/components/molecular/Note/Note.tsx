import { INote } from '@src/types';
import styles from './Note.module.scss';

export function Note({ note }: { note: INote }) {
  return (
    <div>
      <p className={styles.content}>
        <span className={styles.date}>{note.date}</span>
        {note.content}
      </p>
    </div>
  );
}
