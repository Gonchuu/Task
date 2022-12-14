import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Your Profile</h1>
        <button className='button' onClick={() => navigate('/tasks')}>Tasks</button>
        <button className='button' onClick={ () => navigate(-1) }>
                Go Back
        </button>
    </div>
  )
}

export default ProfilePage;