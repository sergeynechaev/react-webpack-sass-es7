import React from 'react';

import {InputText} from '../../controls/forms/inputText';

export class AppPage extends React.Component {

    constructor( props ) {
        super( props );
    }

    state = {}

    componentWillMount =()=> {
    }

    componentDidMount =()=> {
    }

    componentDidUpdate =()=> {
    }

    componentWillReceiveProps =(nextProps)=> {
    }

    componentWillUnmount = ()=>{
    }

    render =()=> {
        return (
            <div>
                <div>App Page.</div>
                <div>Here's a simple input field:</div>
                <InputText name="testField" id="testField" defaultValue="Some value" placeholder="Type here" />
            </div>
        )
    }
}