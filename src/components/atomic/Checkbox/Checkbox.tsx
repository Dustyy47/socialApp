import styles from './Checkbox.module.scss';

export function Checkbox({
  isChecked,
  onToggle,
  label = ''
}: {
  isChecked: boolean;
  onToggle: (isChecked: boolean) => void;
  label?: string;
}) {
  const handleToggle = (e: React.ChangeEvent) => {
    onToggle(!isChecked);
  };

  return (
    <label className={styles.wrapper}>
      <input
        type='checkbox'
        className={styles.input}
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={styles.checkbox}>
        <svg
          className={styles.mark}
          xmlns='http://www.w3.org/2000/svg'
          width='8'
          height='8'
          viewBox='0 0 8 8'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.94899 5.41864L1.14963 3.58088L0 4.75505L2.00133 6.79941L3.17667 8L8 0.952633L6.66793 0L2.94899 5.41864Z'
            fill='currentColor'
          />
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
