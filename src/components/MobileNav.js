import React, { useState } from 'react';
import { FaBars, FaWindowClose, FaSpotify, FaBookReader } from 'react-icons/fa';

function MobileMenu(props) {
    const {token, setToken} = {...props}
  const [iconState, setIcon] = useState(false)
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  return (
    <>
    {iconState ? 
      <FaWindowClose className='dropdownIcon' onClick={() => {setIcon(false)}}/>:
      <FaBars className='dropdownIcon' onClick={() => {setIcon(true)}}/>
      }
    <div className="mobile-menu">
      <nav className={`menu ${iconState ? 'open' : 'closed'}`}>
      <button className='login-btn-mobile' onClick={logout}>
      <a><FaSpotify /> Logout</a>
      </button>
      <br />
      <button className='login-btn-mobile'>
      <a href='https://luke-ichpekov.github.io/portfolio/' target="_blank"><FaBookReader /> portfolio</a>
      </button>
      </nav>
    </div>
    </>
  
  );
  
}

export default MobileMenu;