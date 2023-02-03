import React from 'react'
import InnerDashboard from './InnerDashboard';
import NavComponent from './NavComponent';
import {useEffect, useState} from 'react';


export default function MainDashboard(props) {
  const {token, setToken} = {...props}
    return (
      <div className='flex-wrapper'>
        <div className='main_container'>
        {/* nav component*/}
        <NavComponent token = {token } setToken = {setToken}/>

        {/* main inner dashboard component*/}
        <InnerDashboard token = {token} setToken = {setToken} />
        {/* innher dashboard component*/}
    </div>
    </div>

  )
}
