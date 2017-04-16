import React, { Component } from 'react';
import MapDisplay from './mapdisplay';
import axios from 'axios';

// Ticketmaster API
const API_KEY = '5FFGeDHfGfog0YrGFPOX6Rwx8G2V6GSl';
const ROOT_URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}`;
const COUNTRY = '&countryCode=US';
let START_DATE = new Date();
let endDate = new Date();
endDate.setDate(endDate.getDate() + 1);

let curr_date = ("0" + START_DATE.getDate()).slice(-2);
let curr_month = ("0" + (START_DATE.getMonth() + 1)).slice(-2); // months are 0 based
let curr_year = START_DATE.getFullYear();
let end_date = (START_DATE.getDate() + 1);


const LOCAL_DATE = `&startDateTime=${curr_year}-${curr_month}-${curr_date}T00:00:00Z&endDateTime=${curr_year}-${curr_month}-${end_date}T00:00:00Z`;

export default class MapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: '',
            googleCity: '',
            googleState: '',
            ticketmasterResults: []
        };
    }

    submitQuery = (event) => {
        event.preventDefault();
    };

    handleCityChange = (event) => {
        this.setState({city : event.target.value});
        //console.log(this.state.city);
    };

    handleStateChange = (event) => {
        this.setState({state: event.target.value});
        //console.log(this.state.state);
    };

    submitForm = () => {
        const CITY = `city=${this.state.city}`;
        const STATE = `state=${this.state.state}`;

        let TICKET_SEARCH = `${ROOT_URL}${COUNTRY}&${CITY}&${STATE}${LOCAL_DATE}`;
        TICKET_SEARCH = TICKET_SEARCH.replace(/ /, "%20");
        //console.log(TICKET_SEARCH);

        this.ticketmasterSearch(TICKET_SEARCH);
    };

    ticketmasterSearch = (url) => {
        let self = this;
        axios.get(url)
            .then(function (response) {
                let ticketResponse = response.data._embedded.events;
                let ticketmasterResults = ticketResponse.map(listitem => {
                    //name, url, dates.start.localDate, info, _embedded.venues[0].name,
                    // _embedded.venues[0].address.line1, _embedded.venues[0].location.latitude(longitude,
                    //console.log(listitem._embedded.venues[0].location.latitude);
                    let {
                        name,
                        url,
                        dates: {
                            start: { localDate }
                        },
                        info,
                        _embedded: {
                            venues: [{
                                name: venueName,
                                address: { line1: venueAddress } = { venueAddress: 'none'},
                                location: { longitude } = { longitude: ''},
                                location: { latitude } = { longitude: ''}
                            }]
                        }
                    } = listitem;
                    return {
                        name,
                        url,
                        localDate,
                        info,
                        venueName,
                        venueAddress,
                        longitude,
                        latitude
                    }
                });
                self.setState({ticketmasterResults});
                self.setState({ googleCity: self.state.city });
                self.setState({ googleState: self.state.state});
                self.setState({ city: ''});
                self.setState({ state: ''});

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitQuery}>
                    <div className="form-group row">
                        <label htmlFor="search-input" className="col-xs-2 col-form-label">City</label>
                            <div className="col-xs-2">
                                <input onChange={this.handleCityChange} value={this.state.city} type="text" className="form-control" name="searchQuery"/>
                            </div>
                        <label htmlFor="search-input" className="col-xs-2 col-form-label">State</label>
                        <div className="col-xs-2">
                            <input onChange={this.handleStateChange} value={this.state.state} type="text" className="form-control" name="searchQuery"/>
                        </div>
                <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                <MapDisplay city={this.state.googleCity} state={this.state.googleState} ticketSearch={this.state.ticketmasterResults}/>
                    </div>
                </form>
            </div>
        );
    }
}
