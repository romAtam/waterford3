import React from 'react'
import { GoogleMap, LoadScript,useJsApiLoader,  Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 52.243243431357136,
  lng: -7.1500611305236825
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })
console.log(isLoaded)

  return  isLoaded ? (


     <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
       <Marker position={center}/>
      </GoogleMap>

   

  ):<></>
}

export default React.memo(MyComponent)