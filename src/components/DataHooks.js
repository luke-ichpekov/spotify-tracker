import axios from 'axios';
import React from 'react'
import {useEffect, useState} from 'react';

export const getData = async (setProfileData, token) => {
const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
      },
  })
  setProfileData([data.display_name, data.images[0].url, data.followers.total])
}

export  const getSongOfDay = async (setSongOfMonthData, token) => {
  const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`
    },
    params:{
      limit:1,
      time_range:"short_term"
    }

}) 
setSongOfMonthData([data.items[0].name, data.items[0].popularity, data.items[0].artists[0].name, data.items[0].album.images[1].url])
}

export const getArtistData = async (setArtistOfMonthData, token) => {
  const {data} = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`
    },
    params:{
      limit:1,
      time_range:"medium_term"
    }

}) 
setArtistOfMonthData([data.items[0].name, data.items[0].popularity, data.items[0].followers.total, data.items[0].images[1].url])

}

export const getRecentSongs = async (setRecentData, token) => {
  const {data} = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${token}`
    },
    params:{
      limit:10,
    }
}) 

data.items.forEach(element => {
  setRecentData( recentData =>  [...recentData,  [element.track.name, element.track.artists[0].name, element.track.album.images[1].url]] )
});
}
