import { FilterIcon } from '@src/components/atomic/FilterIcon/FilterIcon';
import { PlusIcon } from '@src/components/atomic/PlusIcon/PlusIcon';
import { Searchbar } from '@src/components/molecular/Searchbar/Searchbar';
import { Statusbar } from '@src/components/molecular/Statusbar/Statusbar';
import UserCard from '@src/components/molecular/UserCard/UserCard';
import { IUserCard } from '@src/types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './UsersList.module.scss';

export function UsersList({ userCards }: { userCards: IUserCard[] }) {
  const [filteredCards, setFilteredCards] = useState(userCards);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);

  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  function handleSearch(query: string) {
    setSearchQuery(query);
    setFilteredCards(
      getFilteredCards(isAscending).filter((card) =>
        card.user.lastname.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function toggleFilter() {
    setIsAscending((prev) => {
      setFilteredCards(getFilteredCards(!prev));
      return !prev;
    });
  }

  function getFilteredCards(isAscending: boolean) {
    return [...userCards].sort((a, b) => {
      const compareResult = a.user.lastname > b.user.lastname;
      return isAscending ? +!compareResult : +compareResult;
    });
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
  function handleClickUser(targetUserId: string) {
    if (id === targetUserId) return;
    navigate(`/users/${targetUserId}/notes`);
  }

  useEffect(() => {
    setFilteredCards(getFilteredCards(isAscending));
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
              onClick={() => handleClickUser(userCard.user.id)}
              isActive={id === userCard.user.id}
              showCheckbox={isChecking}
              onCheck={(isChecked) =>
                handleCheckUser(userCard.user.id, isChecked)
              }
              isChecked={checkedUsers.includes(userCard.user.id)}
              {...userCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
