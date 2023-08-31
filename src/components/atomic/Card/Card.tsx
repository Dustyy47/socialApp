import clsx from 'clsx';
import styles from './Card.module.scss';
import { HTMLProps } from 'react';

interface ICardProps extends HTMLProps<HTMLDivElement> {}

export function Card({ children, className = '', ...props }: ICardProps) {
  return (
    <div {...props} className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
}
