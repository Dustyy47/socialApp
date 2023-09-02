import { INote } from '@src/types';
import { Options } from '../Options/Options';
import styles from './Note.module.scss';

export function Note({ note }: { note: INote }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.content}>
          <span className={styles.date}>{note.date}</span>
          {note.content}
        </p>
        <div className={styles.images}>
          {note.images.map((src, index) => (
            <img
              key={index}
              className={styles.image}
              src={src}
              alt={'note image'}
            />
          ))}
        </div>
      </div>
      <div>
        <Options />
      </div>
    </div>
  );
}
