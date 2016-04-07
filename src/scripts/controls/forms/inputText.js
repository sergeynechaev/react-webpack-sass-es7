import React from 'react';

export class InputText extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        autoFocus: React.PropTypes.bool,
        readOnly: React.PropTypes.any,
        disabled: React.PropTypes.any,
        type: React.PropTypes.string,
        className: React.PropTypes.string,
        value: React.PropTypes.any
    };

    constructor(props) {
        super(props);
    }

    state = {}

    componentWillMount = ()=> {
    }

    componentDidMount = ()=> {
    }

    componentDidUpdate = ()=> {
    }

    componentWillReceiveProps = (nextProps)=> {
    }

    componentWillUnmount = ()=> {
    }

    render = ()=> {
        return (
            <input type={this.props.type}
                   name={this.props.name}
                   id={this.props.id}
                   autoFocus={this.props.autoFocus}
                   disabled={!!this.props.disabled}
                   placeholder={this.props.placeholder}
                   defaultValue={this.props.defaultValue}
                   readOnly={!!this.props.readOnly}
                   className={this.props.className}
            />
        );
    }
}