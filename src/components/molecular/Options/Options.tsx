import OptionsIcon from '@src/components/atomic/OptionsIcon/OptionsIcon';
import { ISelectItem, Select } from '@src/components/atomic/Select/Select';
import { useState } from 'react';
import styles from './Options.module.scss';

const optionsItems: ISelectItem[] = [
  {
    id: '1',
    label: 'Изменить'
  },
  {
    id: '2',
    label: 'Удалить'
  }
];

export function Options() {
  const [isOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <OptionsIcon isActive={isOpen} onClick={handleToggle} />
      <div className={styles.list}>
        <Select isActive={isOpen} items={optionsItems}></Select>
      </div>
    </div>
  );
}
