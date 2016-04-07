import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

export class Dashboard extends React.Component {
	
	render =()=> {
		return (
			<div>
				<div><Link to="/">Back to the main page</Link></div>
				<div>App Dashboard</div>
				<ul>
					<li><Link to="/dashboard/page">Page</Link></li>
					<li><Link to="/dashboard/another-page">Another Page</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}
