import clsx from 'clsx';
import styles from './OptionsIcon.module.scss';

export function OptionsIcon({
  isActive,
  onClick
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.wrapper, isActive && styles['wrapper--active'])}
    >
      <svg
        className={clsx(styles.icon)}
        width='20'
        height='4'
        viewBox='0 0 20 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0ZM10 0C11.1046 0 12 0.895431 12 2C12 3.10457 11.1046 4 10 4C8.89543 4 8 3.10457 8 2C8 0.895431 8.89543 0 10 0ZM20 2C20 0.895431 19.1046 0 18 0C16.8954 0 16 0.895431 16 2C16 3.10457 16.8954 4 18 4C19.1046 4 20 3.10457 20 2Z'
          fill='currentColor'
        />
      </svg>
    </div>
  );
}

export default OptionsIcon;
