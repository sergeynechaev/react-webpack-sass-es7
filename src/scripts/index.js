import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, browserHistory, Router, Route  } from 'react-router'

import {AppRoutes} from './appRoutes';

// styles
require('../styles/index.scss');

ReactDOM.render((
    <Router history={browserHistory}>
        {AppRoutes}
    </Router>
), document.getElementById("app"));