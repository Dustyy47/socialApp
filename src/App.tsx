import '@src/styles/globals.scss';
import { UserInfo } from './components/molecular/UserInfo/UserInfo';
import Header from './components/organisms/Header/Header';
import { UsersList } from './components/organisms/UsersList/UsersList';
import { IUser, IUserCard } from './types';
import { useMemo, useState } from 'react';
import { Profile } from './components/organisms/Profile/Profile';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { mockUsersCards } from './mock';
import { UsersPage } from './pages/UsersPage/UsersPage';

export function App() {
  return (
    <>
      <Header />
      <main className='wrapper container'>
        <Routes>
          <Route path='users' element={<UsersPage />}>
            <Route path=':id' element={<Profile />}>
              <Route path='profile' element={'PROFILE'}></Route>
              <Route
                path='*'
                element={<Navigate to='profile'></Navigate>}
              ></Route>
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='users'></Navigate>} />
        </Routes>
      </main>
    </>
  );
}
