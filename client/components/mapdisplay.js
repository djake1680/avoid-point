import React, { Component } from 'react';


export default class MapDisplay extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount = () => {
        //this.initMap({ lat: 32.708806836774, lng: -117.15423137672121 });
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.city !== this.props.city) {
          //console.log(nextProps.ticketSearch[0].longitude);
          let latitude = parseFloat(nextProps.ticketSearch[0].latitude);
          let longitude = parseFloat(nextProps.ticketSearch[0].longitude);
          this.initMap(nextProps.ticketSearch);
          //console.log(latitude);
          //console.log(longitude);
        }
    }

    initMap = (mapProps) => {

      let currWindow = false;
      //console.log(coords);
      console.log(mapProps[0].latitude);
      let initCenter = {lat: parseFloat(mapProps[0].latitude), lng: parseFloat(mapProps[0].longitude)};

      let map = this.googleMap = new google.maps.Map(this.refs.map, {
          zoom: 11,
          center: initCenter
      });

      mapProps.map(listitem => {
        //console.log(listitem);
        let latitude = parseFloat(listitem.latitude);
        let longitude = parseFloat(listitem.longitude);
        console.log(listitem.name);

        var infowindow = new google.maps.InfoWindow({
          content: listitem.name,
          maxWidth: 150
        });
        var marker = new google.maps.Marker({
          position: ({lat: latitude, lng: longitude}),
          map: map,
        });

        marker.addListener('click', function() {
          if( currWindow ) {
           currWindow.close();
        }

        currWindow = infowindow;
        infowindow.open(map, marker);
            infowindow.open(map, marker);
        });
    });
  }

    render() {
        //console.log(this.props.ticketSearch);

        const mapStyle = {
            width: 600,
            height: 450,
            border: '1px solid black'
        };

        return (
            <div className="col-xs-6">
                <div ref="map" style={mapStyle}>Finding events...</div>
            </div>
        );
    }
}
