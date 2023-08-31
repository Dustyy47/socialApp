import { Card } from "@src/components/atomic/Card/Card";
import { CrossIcon } from "@src/components/atomic/CrossIcon/CrossIcon";
import { SearchIcon } from "@src/components/atomic/SearchIcon/SearchIcon";
import { useState } from "react";
import styles from "./Searchbar.module.scss";

export function Searchbar({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (newValue: string) => any;
  children: React.ReactNode;
}) {
  const [isActive, setActive] = useState(false);

  function handleChange(v: string) {
    onChange(v);
  }

  function startSearch() {
    setActive(true);
  }

  function finishSearch() {
    setActive(false);
    onChange("");
  }

  return (
    <Card className={styles.wrapper}>
      {isActive ? (
        <>
          <div className={styles.inputWrapper}>
            <div className={styles.activeInputIcon}>
              <SearchIcon disabled onClick={startSearch} />
            </div>
            <input
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Найти"
              value={value}
              type="text"
              className={styles.input}
            />
          </div>
          <CrossIcon onClick={finishSearch} />
        </>
      ) : (
        <>
          <SearchIcon onClick={startSearch} />
          <div className={styles.lastButtons}>{children}</div>
        </>
      )}
    </Card>
  );
}
