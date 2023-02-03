import React from 'react'
import CardComponent from './CardComponent'
import {useEffect, useState} from 'react';
import { getSongOfDay, getData, getArtistData, getRecentSongs } from './DataHooks';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import {FaFire} from "react-icons/fa"
export default function InnerDashboard(props) {
  const {token, setToken} = {...props}
    const [songOfMonthData, setSongOfMonthData] = useState([])
    const [artistOfMonthData, setArtistOfMonthData] = useState([])
    const [profileData, setProfileData] = useState([])
    const [recentData, setRecentData] = useState([])
    const [curIndex, setCurIndex] = useState(1)
    const lastIndex = recentData.length

    useEffect(() => {
      getData(setProfileData, token)
      getArtistData(setArtistOfMonthData, token)
      getSongOfDay(setSongOfMonthData, token)
      getRecentSongs(setRecentData, token)
    }, [])
    const renderProfile =() => {
      return(
        <div>
          {/* profile name */}
          <div className='data_element'>{profileData[0]}</div>          
          <div className='data_category'>profile name</div>

          {/*Followers  */}
        <div className='data_element'> {profileData[2].toLocaleString('en-US')}</div>  
        <div className='data_category'>Followers</div>

        </div>
      )

    }
    const renderSongOfMonth =() => {
      return (
        <div>
          {/* name */}
         <div className='data_element'>{songOfMonthData[0]}</div>          
         <div className='data_category'>song name</div>
          {/* popularity */}
          <div className='data_element'> {songOfMonthData[1]} <FaFire /> </div>  
          <div className='data_category'>popularity</div>

          {/* artist */}
          <div className='data_element'> {songOfMonthData[2]}</div>  
        <div className='data_category'>artist</div>
      </div>
        )
    }
    const renderTopArtist=() => {
      return (
        <div>
          {/* name */}
         <div className='data_element'>{artistOfMonthData[0]}</div>          
         <div className='data_category'>name</div>
        

        {/* popularity */}
         <div className='data_element'> {artistOfMonthData[1]} <FaFire /> </div>  
        <div className='data_category'>popularity</div>
         

         {/*Followers  */}
         <div className='data_element'> { artistOfMonthData[2].toLocaleString('en-US')}</div>  
        <div className='data_category'>Followers</div>
      </div>
        )
    }
    const renderRecent=() => {
      return (
          <div>
            {/* name */}
            <div className='data_element'>{recentData[curIndex][0]}</div>          
            <div className='data_category'>song name</div>
         
         {/* artist */}
            <div className='data_element'>{recentData[curIndex][1]}</div>          
            <div className='data_category'>artist</div>
          </div>
        )
    }

  return (
    <div className='inner_dashboard_grid'>
      
      <div className='mobileWrapper'>
      <CardComponent 
        rowStart={1} rowEnd={2}
        colStart={1} colEnd={2} 
        title="Profile"
        description={profileData.length>1 ? renderProfile(): <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc={profileData?  profileData[1]: <div> Loading <AiOutlineLoading3Quarters /></div>}
        />
        
        <CardComponent 
        rowStart={2} rowEnd={3}
        colStart={1} colEnd={2} 
        title="Recent tracks"
        description={recentData.length>1 ? renderRecent() : <div>No Data</div> }
        imgSrc={recentData.length>1 ? recentData[curIndex][2] : <div> Loading <AiOutlineLoading3Quarters /></div>}
        leftArr ={true} rightArr={true}
        curIndex = {curIndex}
        setCurIndex = {setCurIndex}
        lastIndex= {lastIndex}
        />

        <CardComponent 
        rowStart={3} rowEnd={4} 
        colStart={1} colEnd={2} 
        title="Song of the Month" 
        description={songOfMonthData? renderSongOfMonth():  <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc ={songOfMonthData? songOfMonthData[3]:  <div> Loading <AiOutlineLoading3Quarters /></div>} 
        />
        <CardComponent 
        rowStart={4} rowEnd={5}
        colStart={1} colEnd={2} 
        title="Top Artist"
        description={artistOfMonthData.length>1 ? renderTopArtist(): <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc={artistOfMonthData ? artistOfMonthData[3] :<div> Loading <AiOutlineLoading3Quarters /></div>}
        />
      </div>

      <div className='desktopWrapper'>
        
      <CardComponent 
        rowStart={1} rowEnd={2}
        colStart={1} colEnd={2} 
        title="Profile"
        description={profileData.length>1 ? renderProfile(): <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc={profileData?  profileData[1]: <div> Loading <AiOutlineLoading3Quarters /></div>}
        />
        
        <CardComponent 
        rowStart={1} rowEnd={2}
        colStart={2} colEnd={3} 
        title="Recent tracks"
        description={recentData.length>1 ? renderRecent() : <div>No Data</div> }
        imgSrc={recentData.length>1 ? recentData[curIndex][2] : <div> Loading <AiOutlineLoading3Quarters /></div>}
        leftArr ={true} rightArr={true}
        curIndex = {curIndex}
        setCurIndex = {setCurIndex}
        lastIndex= {lastIndex}
        />

        <CardComponent 
        rowStart={2} rowEnd={3} 
        colStart={1} colEnd={2} 
        title="Song of the Month" 
        description={songOfMonthData? renderSongOfMonth():  <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc ={songOfMonthData? songOfMonthData[3]:  <div> Loading <AiOutlineLoading3Quarters /></div>} 
        />
        <CardComponent 
        rowStart={2} rowEnd={3}
        colStart={2} colEnd={3} 
        title="Top Artist"
        description={artistOfMonthData.length>1 ? renderTopArtist(): <div> Loading <AiOutlineLoading3Quarters /></div>}
        imgSrc={artistOfMonthData ? artistOfMonthData[3] :<div> Loading <AiOutlineLoading3Quarters /></div>}
        />
        </div>

    </div>
  )
}
