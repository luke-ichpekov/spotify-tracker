import React from 'react'
import {useEffect, useState} from 'react';
import { FaSpotify } from "react-icons/fa";

const CLIENT_ID = "14d22c5f05ab48518f9221ba51d006bb"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const scopes = "user-top-read user-read-playback-state playlist-read-private playlist-read-collaborative user-read-recently-played"

export default function Auth(props) {
  const {token, setToken} = {...props}

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
      
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
      
        setToken(token)
      
      }, [])

  return (
    <div className='container'>
      <div className='login_container'>
        <a  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`}>
          <button className='login-btn-auth'><FaSpotify /> Login to Spotify</button>
          </a> 
      </div>

    </div>
  )
}
