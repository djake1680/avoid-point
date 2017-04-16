import React, { Component } from 'react';
import styles from './event_hub.scss';
import agent007 from 'superagent';

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
            events: [],
            filterOptions: {
                radius: '',
                category: ''

            }
        }
    }

    SearchComponent = () => (
        <div className={styles.search_container}>
            <input
                className={styles.search_input}
                type="text"
                placeholder='City or ZIP Code'
                value={this.state.searchText}
                onChange={event => this.setState({ searchText: event.target.value })}
            />
            <button onClick={this.findEvents}>Go</button>
            <p onClick={this.getUserLocation}>Use My Location</p>
        </div>
    )

    filterOptions = () => (
        <div>
            //radius
            //date
            //category
        </div>
    )


    getUserLocation = () => {
        this.setState({ searchText: 'Locating...' });
        getLocation().then(zipCode => {
            this.setState({ searchText: zipCode });
        });
    }

    findEvents = () => {
        return agent007
            .get('http://api.eventful.com/json/events/search?')
            .query({
                app_key: APP_KEY,
                where: this.state.searchText,
                when: 'today',
                within: '25'
            })
            .end((err, res) => {
                if (!!err) return;
                let eventInfo = JSON.parse(res.xhr.response);
                let events = eventInfo.events.event.map(event => {
                    let { id, title, longitude, latitude, venue_name, venue_address, city_name, region_abbr, postal_code } = event;
                    return { id, title, longitude, latitude, venue_name, venue_address, city_name, region_abbr, postal_code };
                });
                this.setState({ events, googleMapSearchValue: this.state.searchText });
            });
    }

    eventList = () => this.state.events.map(event => <EventItem key={event.id} {...event} /> );

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

