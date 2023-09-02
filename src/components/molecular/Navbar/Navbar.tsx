import { AddButton } from '@src/components/atomic/AddButton/AddButton';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

interface INavLink {
  name: string;
  to: string;
}

const navlinks: INavLink[] = [
  {
    name: 'Заметки',
    to: 'notes'
  },
  {
    name: 'Консультации',
    to: 'consultations'
  },
  {
    name: 'Видео',
    to: 'videos'
  },
  {
    name: 'Мероприятия',
    to: 'events'
  }
];

export function Navbar() {
  const location = useLocation();
  const activeLink = location.pathname.split('/').at(-1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navlinks}>
        {navlinks.map((link, index) => (
          <Link
            key={index}
            className={clsx(
              styles.navlink,
              activeLink === link.to ? styles['navlink--active'] : '123'
            )}
            to={link.to}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <AddButton label='Новая заметка' />
    </div>
  );
}
