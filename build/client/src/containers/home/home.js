import React, { Component } from 'react';
import styles from './home.scss';

import About from '../../components/about/about';

export default class Home extends Component {
	render = () => (
        <div className={styles.homeContainer}>
            <div className={styles.homeTitleContainer}>
                <h1 className={styles.homeTitle}>React</h1>
            </div>
            <About />
        </div>
    );
}