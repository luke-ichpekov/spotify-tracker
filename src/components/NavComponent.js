import React from 'react'
import { FaSpotify, FaBookReader } from "react-icons/fa";
import {FaHome} from "react-icons/fa"
import {BiStats} from "react-icons/bi";
import {FaMapPin} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import MobileMenu from './MobileNav';


export default function NavComponent(props) {
    const {token, setToken} = {...props}
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
      }
  return (
    <nav className='nav_tag'>
        <h1 className='webTitle'> <FaMapPin  /> Spotify Tracker</h1>   
        <MobileMenu token={token} setToken={setToken} />     
        
        <a href='https://luke-ichpekov.github.io/portfolio/' target="_blank">
        <button className='login-btn'><FaBookReader /> Portfolio</button>
        </a>
        <button className='login-btn' onClick={logout}><FaSpotify />  Logout</button>
    
    </nav>
  )
}
