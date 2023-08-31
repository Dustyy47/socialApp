import styles from "./Avatar.module.scss";

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className={styles.image} />;
}
