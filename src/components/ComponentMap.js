import React, {useCallback, useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultProps = {
  center: {
    lat: -31.647260,
    lng: -60.699869
  },
  zoom: 15
}
const ComponentMap= () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_URL,
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
      zoom={defaultProps.zoom}>
      <Marker position={{ lat: -31.647260, lng: -60.699869 }} />
        { /* Child components, such as markers, info windows, etc. */ }
        
      </GoogleMap>
  ) : <>Loading...</>
}

export default ComponentMap




// import React from 'react'
// import GoogleMapReact from 'google-map-react';

// const ComponentMap = () => {
//   const defaultProps = {
//     center: {
//       lat: -31.647260,
//       lng: -60.699869
//     },
//     zoom: 16
//   };
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_API_URL }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
        
//       </GoogleMapReact>
//     </div>
//  )
// }

  
  

// export default ComponentMap





