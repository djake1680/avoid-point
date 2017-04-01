import React from 'react';

export default (props) => (
	<html>
		<head>
			<title>{props.title}</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0" />
			<link rel='stylesheet' href='/style.css' />
		</head>
		<body>		
			{props.children}
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZOKztpgiiRqzd59Er73RV_m7JQOU8ZOw" />
            <script src="/bundle.js" />
		</body>
	</html>
)
