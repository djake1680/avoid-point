import React from 'react';
import styles from './event_item.scss';

export default (props) => (
    <div className={styles.event_item_container}>
        <h1 className={styles.title}>{props.title}</h1>
        <h3 className={styles.venue}>{props.venue_name}</h3>
        <address className={styles.address}>{
            `${props.venue_address}, ${props.city_name}, ${props.region_abbr} ${props.postal_code}`
        }</address>
    </div>
)