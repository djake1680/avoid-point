import React, { Component } from 'react';
import styles from './google_map.scss';

export default class GoogleMap extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.initMap({ lat: 32.708806836774, lng: -117.15423137672121 });
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.searchValue !== this.props.searchValue;
    }

    componentWillUpdate = (nextProps, nextState) => {
        this.initMap({ lat: Number(nextProps.events[0].latitude), lng: Number(nextProps.events[0].longitude) });
        this.createMarkers(nextProps.events);
    }

    initMap = coords => {
        this.googleMap = new google.maps.Map(this.mapCanvas, {
            zoom: 12,
            center: coords
        });
    }

    createMarkers = events => {
        return events.map(event => {
            let coords = {lat: Number(event.latitude), lng: Number(event.longitude) };
            let marker = new google.maps.Marker({
                position: coords,
                map: this.googleMap
            });
        })
    }

    render = () => {
        console.log('Render GoogleMap');
        return (
            <div className={styles.map_container}>
                <div className={styles.google_map} ref={ref => this.mapCanvas = ref }>
                </div>
            </div>
        )
    }
}

GoogleMap.propTypes = {
    searchValue: React.PropTypes.string,
    events: React.PropTypes.array
}

