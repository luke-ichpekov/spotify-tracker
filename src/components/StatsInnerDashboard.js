import React from 'react'
import CardComponent from './CardComponent'
import avatar from "../spotifyAvatar.png"
import album from "../albumCover.jpg"


export default function StatsInnerDashboard() {
  return (
    <div className='inner_dashboard_grid'>
    <CardComponent 
    rowStart={1} rowEnd={5} 
    colStart={1} colEnd={5}
    title="Stats"
    description="stat graph thing"
    imgSrc ={album} 
    />
</div>
  )
}
