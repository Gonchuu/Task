import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPages from './pages/tasks/TasksPages';
import TasksDetailPages from './pages/tasks/TasksDetailPages';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])


  return (
    <Router>
      <Link to='/'>
        <button  className='container-button'>Home</button>
      </Link>
      <Link to='about'>
        <button  className='container-button'>About</button>
      </Link>
      <Link to='profile'>
        <button  className='container-button'>Profile</button>
      </Link>
      <Link to='login'>
        <button  className='container-button'>Login</button>
      </Link>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='profile' element={ <ProfilePage />} />


          <Route path='tasks' element={<TasksPages />} />
          <Route path='task/:id' element={<TasksDetailPages />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

