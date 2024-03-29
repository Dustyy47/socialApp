import styles from './AddButton.module.scss';

export function AddButton({ label }: { label: string }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <svg
        className={styles.icon}
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.7645 12.596H17.5565C17.9971 12.596 18.3543 12.9532 18.3543 13.3938C18.3543 13.8345 17.9971 14.1917 17.5565 14.1917H13.7645V18.3433C13.7645 18.7709 13.4178 19.1176 12.9902 19.1176C12.5626 19.1176 12.216 18.7709 12.216 18.3433V14.1917H8.44629C8.00565 14.1917 7.64844 13.8345 7.64844 13.3938C7.64844 12.9532 8.00565 12.596 8.44629 12.596H12.216V8.42123C12.216 7.99362 12.5626 7.64697 12.9902 7.64697C13.4178 7.64697 13.7645 7.99362 13.7645 8.42123V12.596Z'
          fill='currentColor'
        />
      </svg>
    </div>
  );
}
