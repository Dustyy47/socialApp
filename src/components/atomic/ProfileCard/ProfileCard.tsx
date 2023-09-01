import clsx from 'clsx';
import { HTMLProps } from 'react';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps extends HTMLProps<HTMLDivElement> {}

export function ProfileCard({
  children,
  className,
  ...props
}: IProfileCardProps) {
  return (
    <div {...props} className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
}
