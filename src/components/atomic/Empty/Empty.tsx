import { ReactNode } from 'react';
import styles from './Empty.module.scss';

export const Empty = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
