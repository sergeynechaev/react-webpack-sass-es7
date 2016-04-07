import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

export class MainPage extends React.Component {

    render =()=> {
        return (
            <div>
                <div>App Main page</div>
                <ul>
                    <li><Link to="/dashboard">Go to Dashboard</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
