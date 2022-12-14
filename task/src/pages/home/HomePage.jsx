import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {


    const location = useLocation();
    
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

  return (
    <div>
        <h1> Home Page </h1>
        <button className='button' onClick={() => navigate('/profile')}>
                Go To Profile
        </button>
    </div>
  )
}

export default HomePage