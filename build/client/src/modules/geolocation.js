import agent007 from 'superagent';

/**
 * Retrieve current location zip code
 * @function getLocation
 * @returns {Object} - Location data.
 * @notes getCurrentPosition() deprecated over HTTP. Details https://goo.gl/rStTGz
 */
export default () => {
    return new Promise((resolve, reject) => {
        let failText = "Could not get current location.", i;
        if (navigator.geolocation) {

            // Get latitude & longitude data from user
            navigator.geolocation.getCurrentPosition(geo => {
                console.log('getLocation', geo);
                let lat = geo.coords.latitude,
                    lng = geo.coords.longitude;

                // Make call to Google API to get location information
                let getLocationData = !!lat && !!lng ? googleMapsApiCall(lat, lng) : alert(failText);
                getLocationData.then(data => {
                    let locationData = JSON.parse(data.xhr.response).results;
                    if (locationData.length > 0) {

                        // Search data for postal code and redirect
                        for (i = 0; i < locationData.length; i++) {
                            if (locationData[i].types[0] === "postal_code") {
                                let zipCode = locationData[i].address_components[0].short_name;
                                console.log('Zip Code: ', zipCode);
                                resolve(zipCode);
                            }
                        }
                    } else { alert(failText); }
                });
            }, fail => { alert(failText); console.log('Geolocation Failed: ', fail) });
        } else { alert(failText) }
    })
}

/**
 * API call to retrieve location information
 * @function googleMapsApiCall
 * @param {number} lat
 * @param {number} lng
 * @returns {Object} - Location data.
 */
const googleMapsApiCall = (lat, lng) => {
    let apiKEY = "AIzaSyCZOKztpgiiRqzd59Er73RV_m7JQOU8ZOw";
    let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKEY}`;
    return agent007.get(apiURL);
}