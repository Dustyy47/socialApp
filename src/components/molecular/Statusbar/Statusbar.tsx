import { Checkbox } from '@src/components/atomic/Checkbox/Checkbox';
import { Select } from '@src/components/atomic/Select/Select';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './Statusbar.module.scss';

export function Statusbar({
  usersCount,
  checkedUsersCount,
  isChecking,
  onToggleAll,
  setIsChecking
}: {
  usersCount: number;
  checkedUsersCount: number;
  isChecking: boolean;
  onToggleAll: (isCheckingAll: boolean) => void;
  setIsChecking: (isChecking: boolean) => any;
}) {
  const [isCheckingAll, setCheckingAll] = useState(false);
  const [isSelectingOption, setSelectingOption] = useState(false);

  function handleStartChecking() {
    setIsChecking(true);
  }

  function handleOpenActions() {}

  function handleCancelChecking() {
    setIsChecking(false);
    setCheckingAll(false);
  }

  function handleToggleAll(newValue: boolean) {
    setCheckingAll(newValue);
    onToggleAll(newValue);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.checks}>
        {isChecking && (
          <div className={styles.checkbox}>
            <Checkbox
              label='Все'
              isChecked={isCheckingAll}
              onToggle={handleToggleAll}
            />
          </div>
        )}
        <div
          className={clsx(
            styles.counter,
            isChecking && styles['counter--active']
          )}
        >
          {isChecking ? checkedUsersCount : usersCount}
        </div>
      </div>
      <div className={styles.options}>
        {isChecking ? (
          <>
            <div className={styles.optionsWrapper}>
              <p onClick={handleOpenActions} className={clsx(styles.option)}>
                Действия
              </p>
              <Select items={} isActive={isSelectingOption} />
            </div>
            <p onClick={handleCancelChecking} className={clsx(styles.option)}>
              Отменить
            </p>
          </>
        ) : (
          <>
            <p
              onClick={handleStartChecking}
              className={clsx(styles.option, styles.single)}
            >
              Выбрать
            </p>
          </>
        )}
      </div>
    </div>
  );
}
