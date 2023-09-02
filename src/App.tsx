import '@src/styles/globals.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Consultations } from './components/organisms/Consultations/Consultations';
import { Events } from './components/organisms/Events/Events';
import Header from './components/organisms/Header/Header';
import Notes from './components/organisms/Notes/Notes';
import { Profile } from './components/organisms/Profile/Profile';
import { Videos } from './components/organisms/Videos/Videos';
import { UsersPage } from './pages/UsersPage/UsersPage';

export function App() {
  return (
    <>
      <Header />
      <main className='wrapper container'>
        <Routes>
          <Route path='users' element={<UsersPage />}>
            <Route path=':id' element={<Profile />}>
              <Route path='notes' element={<Notes />}></Route>
              <Route path='videos' element={<Videos />}></Route>
              <Route path='events' element={<Events />}></Route>
              <Route path='consultations' element={<Consultations />}></Route>
              <Route
                path='*'
                element={<Navigate to='notes'></Navigate>}
              ></Route>
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='users'></Navigate>} />
        </Routes>
      </main>
    </>
  );
}
