import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

// core pages
import {App} from './app';
import {MainPage} from './components/mainPage';
import {Dashboard} from './components/dashboard';
import {NotFound} from './components/notFound';

// sections
import {AppPage} from './components/section/appPage';
import {AnotherPage} from './components/anotherSection/anotherPage';

export const AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="dashboard" component={Dashboard}>
            <Route path="page" component={AppPage}/>
            <Route path="another-page" component={AnotherPage}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
);
