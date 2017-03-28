import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import Template from './views/template';
import Home from './containers/home/home';

let initialProps = {title: 'React in a Box'};
!!module.hot ? console.log('Module Hot!!') : console.log('No hot module bro.');

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    // determine required router type for server or client
    routerType = () => (
        this.props.server ? (
            <StaticRouter location={this.props.req.url} context={this.props.context}>
                {this.Route()}
            </StaticRouter>
        ) : (
            <BrowserRouter>
                {this.Route()}
            </BrowserRouter>
        )
    )

    // Serve HTML template for isomorphic rendering
	activateApp = () => (
		<Template {...initialProps}>
            {this.routerType()}
		</Template>
	);

    // Only need BrowserRouter for development (client side only)
    activateDev = () => (
        <BrowserRouter>
            {this.Route()}
        </BrowserRouter>
    );

	Route = () => ( <Route path='/' component={() => <Home {...initialProps} /> } /> );

	render = () => {
		return !!module.hot ? this.activateDev() : this.activateApp();
	}
}