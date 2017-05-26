// FIXME: Add yas snippet for react import. How to do snippets ?
import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        console.log('creating google map');
        new google.maps.Map(this.refs.map,{
            zoom: 11,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
        console.log('created google map');
    }

    render(){
        console.log('rendering google map div');
        return <div className="google-maps-container" ref="map" />;
    }

}

export default GoogleMap;
