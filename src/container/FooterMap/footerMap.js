import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const FOOTERMAP = () =>{
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    return(
        <div>
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                lat: -1.2884,
                lng: 36.8233
            }}
            />
        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBf70Lc8_NCSUX6OcUwHvecBbN3qUy_9Lc'
})(FOOTERMAP);