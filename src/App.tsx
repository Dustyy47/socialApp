import "@src/styles/globals.scss";
import { UserInfo } from "./components/molecular/UserInfo/UserInfo";
import Header from "./components/organisms/Header/Header";
import { UsersList } from "./components/organisms/UsersList/UsersList";
import { IUser, IUserCard } from "./types";

const link =
  "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1296346667/image_1296346667.jpg?io=getty-c-w1536";
const mockUser: IUser = {
  id: "123",
  age: 30,
  avatarUrl: link,
  gender: "male",
  name: "Рожков Денис Петрович",
};

const mockUsersCards: IUserCard[] = [
  {
    user: {
      id: "123",
      age: 30,
      avatarUrl: link,
      gender: "male",
      name: "Алтаев Денис Петрович",
    },
    status: "newNote",
  },
  {
    user: {
      id: "1232",
      age: 301,
      avatarUrl: link,
      gender: "male",
      name: "Бананин  Денис Петрович",
    },
    status: "alert",
  },
];

export function App() {
  return (
    <>
      <Header />
      <main className="wrapper container">
        <div className="list">
          <UsersList userCards={mockUsersCards}></UsersList>
        </div>
        {/* <UserCard user={mockUser} status="newNote" /> */}
        <div className="profile">
          <UserInfo user={mockUser} />
        </div>
      </main>
    </>
  );
}
