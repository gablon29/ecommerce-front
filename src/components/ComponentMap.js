import React from 'react'
import GoogleMapReact from 'google-map-react';

const ComponentMap = () => {
  const defaultProps = {
    center: {
      lat: -31.647260,
      lng: -60.699869
    },
    zoom: 15
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC0VOoWyX1UcMzKpDREi8qyUSkvKgPBQbM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
 )
}

  
  

export default ComponentMap




