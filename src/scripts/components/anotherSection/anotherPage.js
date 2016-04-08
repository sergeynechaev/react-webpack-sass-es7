import React from 'react';

export class AnotherPage extends React.Component {

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
                <div>Another App Page.</div>
                <div>
                    <img src="/static/img/catdeer.jpg" />
                </div>
            </div>
        )
    }
}