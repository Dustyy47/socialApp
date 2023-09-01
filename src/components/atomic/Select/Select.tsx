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

export function UserOptionsSelect() {
  return <Select />;
}

export function Select({
  isActive,
  items
}: {
  isActive: boolean;
  items: ISelectItem[];
}) {
  return (
    <div
      className={clsx(styles.wrapper, isActive && styles['wrapper--active'])}
    >
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          {item.label}
        </div>
      ))}
    </div>
  );
}
