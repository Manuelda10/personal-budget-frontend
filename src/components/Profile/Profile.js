import React from 'react'
import ProfileImg from '../../assets/img/user.png'
import './index.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={ProfileImg} alt='profile'></img>
            <h3>Username</h3>
            <p>user@gmail.com</p>
        </div>
    )
}

export default Profile