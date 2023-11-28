'use client'

import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'


const containerStyle = {
  width: '350px',
  height: '450px',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.30)'
}
const center = {
  lat: 41.716667,
  lng: 44.783333,
}

const SearchMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  })

  return (
    <div>
      <p className='text-center font-fB text-2-4 uppercase px-1-0 py-1-7 border-solid border-0-1 border-black/30 rounded-1-0'>შენი მისამართი</p>
      <div className='relative mt-0-7 mb-2-7'>
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            <Marker position={{ lat: 41.716667, lng: 44.783333 }} />
          </GoogleMap>
        )}
      </div>
      <div className="flex gap-2-0 p-1-0 font-fR text-2-4 border-solid border-0-1 border-black/30 rounded-6-0">            
        <img src="/svg/search.svg" className='w-4-0'/>
        <input placeholder="Search" className="outline-none w-full"/>
      </div>
    </div>
  )
}

export default SearchMap
