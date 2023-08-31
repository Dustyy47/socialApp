import clsx from "clsx";
import styles from "./Card.module.scss";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
