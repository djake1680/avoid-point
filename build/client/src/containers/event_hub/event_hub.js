import React, { Component } from 'react';
import styles from './event_hub.scss';
import axios from 'axios';

const APP_KEY = 'wDjnnQNtWmFvJRXs'; // Eventful API key

// Components
import GoogleMap from '../map/google_map';
import EventItem from '../../components/event_item/event_item';

//Modules
import getLocation from '../../modules/geolocation';

export default class EventHub extends Component {
    constructor (props) {
        super(props);

        this.state = {
            searchText: '',
            googleMapSearchValue: '',
            events: []
        }
    }

    SearchComponent = () => {
        return (
            <div className={styles.search_container}>
                <input
                    className={styles.search_input}
                    type="text"
                    placeholder='City or ZIP Code'
                    value={this.state.searchText}
                    onChange={text => this.setState({ searchText: text.target.value })} />
                <button onClick={this.findEvents}>
                    Go
                </button>
                <p onClick={this.getUserLocation}>Use My Location</p>
            </div>
        )
    }

    getUserLocation = () => {
        this.setState({ searchText: 'Locating...' });
        getLocation().then(zipCode => {
            this.setState({ searchText: zipCode });
        });
    }

    findEvents = () => {
        return axios.get(
            `http://api.eventful.com/json/events/search?app_key=${APP_KEY}&where=${this.state.searchText}&when=today&within=25`
        ).then(eventInfo => {
            let events = eventInfo.data.events.event.map(event => {
                let { id, title, longitude, latitude, venue_name, venue_address, city_name, region_abbr, postal_code } = event;
                return { id, title, longitude, latitude, venue_name, venue_address, city_name, region_abbr, postal_code };
            });
            this.setState({ events, googleMapSearchValue: this.state.searchText });
        });
    }

    eventList = () => {
        return this.state.events.map(event => {
            return <EventItem key={event.id} {...event} />
        })
    }

    render = () => {
        console.log('Render EventHub');
        return (
            <div>
                <GoogleMap {...{searchValue: this.state.googleMapSearchValue, events: this.state.events}} />
                <div className={styles.event_hub_container}>
                    <this.SearchComponent />
                    <div className={styles.event_list_container}>
                        { this.eventList() }
                    </div>
                </div>
            </div>
        )
    }
}