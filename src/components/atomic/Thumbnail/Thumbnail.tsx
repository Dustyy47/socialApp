import styles from './Thumbnail.module.scss';

export function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return <img className={styles.thumbnail} src={src} alt={alt} />;
}
