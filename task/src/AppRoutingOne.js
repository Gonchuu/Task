

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';

function AppRoutingOne() {
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
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutingOne;

