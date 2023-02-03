import React from 'react'
import NavComponent from './NavComponent';
import StatsInnerDashboard from './StatsInnerDashboard';

export default function StatsDashboard(props) {
    const {token, setToken} = {...props}
  return (
    <div className='main_container'>
        {/* nav component*/}
        <NavComponent token = {token } setToken = {setToken}/>
        {/*no nav component */}

        {/* stats inner dashboard component*/}
        <StatsInnerDashboard />
        {/* innher dashboard component*/}

    </div>
  )
}
