import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const FOOTERMAP = () =>{
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    return(
        <div>
            <Map
                google=""
                zoom={14}
                style={mapStyles}
                initialCenter={{
                lat: 28.709498,
                lng: 77.184029
            }}
            />
        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCk_0Vw_pTXFOYQLAcujSJ8hNxyyzb25iw'
})(FOOTERMAP);