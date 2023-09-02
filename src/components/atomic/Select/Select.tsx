import clsx from 'clsx';
import styles from './Select.module.scss';

export interface ISelectItem {
  label: string;
  id: string;
}

const userOptions: ISelectItem[] = [
  {
    id: 'edit',
    label: 'Изменить'
  },
  {
    id: 'delete',
    label: 'Удалить'
  }
];


export function Select({
  isActive
}: {
  isActive: boolean;
}) {
  return (
    <div
      className={clsx(styles.wrapper, isActive && styles['wrapper--active'])}
    >
      {userOptions.map((option) => (
        <div className={styles.item} key={option.id}>
          {option.label}
        </div>
      ))}
    </div>
  );
}
