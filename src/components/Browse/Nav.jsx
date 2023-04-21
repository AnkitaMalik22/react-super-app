import React from 'react';
import './Nav.css';
import avatar from '../../assets/avatar.png';

const Nav = () => {
  return (
    <div className='browse-nav'>
<p className="logo">super app</p>

    <div className="avatar">
        <img src={avatar} alt="avatar" width={50} height={50} />
    </div>

    </div>
  )
}

export default Nav