import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {App} from './App';
import {Dashboard} from './Dashboard';
import {Page} from './Page/Page';

export const AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="dashboard" component={Dashboard}>
            <Route path="page" component={Page}/>
        </Route>
        <Route path="*" component={Page}/>
    </Route>
);

