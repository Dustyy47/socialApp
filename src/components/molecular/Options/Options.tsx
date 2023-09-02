import OptionsIcon from '@src/components/atomic/OptionsIcon/OptionsIcon';
import { Select } from '@src/components/atomic/Select/Select';
import { useState } from 'react';
import styles from './Options.module.scss';

export function Options() {
  const [isOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <OptionsIcon isActive={isOpen} onClick={handleToggle} />
      <div className={styles.list}>
        <Select isActive={isOpen}></Select>
      </div>
    </div>
  );
}
