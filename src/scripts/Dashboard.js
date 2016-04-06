import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export class Dashboard extends React.Component {
	
	render =()=> {
		return (
			<div>
				<div>App Dashboard</div>
				<ul>
					<li><Link to="/page">Page</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}
