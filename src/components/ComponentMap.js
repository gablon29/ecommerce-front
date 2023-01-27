import React from 'react'
import GoogleMapReact from 'google-map-react';
import credentialkey from './credentialkey';

const compTransition = ({ text }) => <div>{text}</div>

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
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <compTransition
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
 )
}

  
  

export default ComponentMap




