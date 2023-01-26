import React from 'react'
import GoogleMapReact from 'google-map-react';
import credentialkey from './credentialkey';

const compTransition = ({ text }) => <div>{text}</div>

const ComponentMap = () => {
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC0VOoWyX1UcMzKpDREi8qyUSkvKgPBQbM'}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <compTransition
          lat={58.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default ComponentMap
