import { FilterIcon } from "@src/components/atomic/FilterIcon/FilterIcon";
import { PlusIcon } from "@src/components/atomic/PlusIcon/PlusIcon";
import { Searchbar } from "@src/components/molecular/Searchbar/Searchbar";
import { Statusbar } from "@src/components/molecular/Statusbar/Statusbar";
import UserCard from "@src/components/molecular/UserCard/UserCard";
import { IUserCard } from "@src/types";
import { useEffect, useState } from "react";
import styles from "./UsersList.module.scss";

export function UsersList({ userCards }: { userCards: IUserCard[] }) {
  const [filteredCards, setFilteredCards] = useState(userCards);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);

  function handleSearch(query: string) {
    setSearchQuery(query);
    if (!query) {
      applyFilter(isAscending);
    }
    setFilteredCards((cards) =>
      cards.filter((card) =>
        card.user.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function toggleFilter() {
    setIsAscending((prev) => {
      applyFilter(!prev);
      return !prev;
    });
  }

  function applyFilter(isAscending: boolean) {
    setFilteredCards((prev) =>
      [...userCards].sort((a, b) => {
        const compareResult = a.user.name > b.user.name;
        return isAscending ? +!compareResult : +compareResult;
      })
    );
  }

  function handleToggleAll(isCheckingAll: boolean) {
    if (!isCheckingAll) setCheckedUsers([]);
    else {
      setCheckedUsers(userCards.map((userCard) => userCard.user.id));
    }
  }

  function handleCheckUser(id: string, isCheckedNow: boolean) {
    if (isCheckedNow) {
      setCheckedUsers((prev) => [...prev, id]);
      return;
    }
    setCheckedUsers((prev) => prev.filter((checkedId) => checkedId !== id));
  }

  useEffect(() => {
    applyFilter(isAscending);
  }, [userCards]);

  useEffect(() => {
    setCheckedUsers([]);
  }, [isChecking]);

  return (
    <div className={styles.wrapper}>
      <Searchbar value={searchQuery} onChange={handleSearch}>
        <FilterIcon isAscending={isAscending} onClick={toggleFilter} />
        <PlusIcon />
      </Searchbar>
      <Statusbar
        onToggleAll={handleToggleAll}
        isChecking={isChecking}
        setIsChecking={setIsChecking}
        usersCount={filteredCards.length}
        checkedUsersCount={checkedUsers.length}
      />
      <div>
        {filteredCards.map((userCard) => (
          <div className={styles.userCard} key={userCard.user.id}>
            <UserCard
              showCheckbox={isChecking}
              onCheck={(isChecked) =>
                handleCheckUser(userCard.user.id, isChecked)
              }
              isChecked={checkedUsers.includes(userCard.user.id)}
              {...userCard}
            ></UserCard>
          </div>
        ))}
      </div>
    </div>
  );
}
