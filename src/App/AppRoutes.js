import React from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'

import App from './App'
import Dashboard from './Dashboard'
import Page from './Page/Page'

export default class AppRoutes extends React.Component {
	
	render =()=> {
		return (
			<Router>
			    <Route path="/" component={App}>
			      <IndexRoute component={Dashboard} />
			      <Route path="page" component={Page} />
			    </Route>
			  </Router>
		)
	}
}

