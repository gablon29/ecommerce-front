import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import './MapsStyle.css' 

const Map = () => {
    return (
      <GoogleMap
          zoom={15}
            center={{ lat: -31.647260, lng: -60.699869 }}
        mapContainerClassName="map-container">
          
    </GoogleMap>
  )
}

export default Map
