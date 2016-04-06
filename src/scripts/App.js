import React from 'react';

export class App extends React.Component {
	
	render =()=> {
		return (
			<div>
				<div>My App</div>
				{this.props.children}
			</div>
		)
	}
}
