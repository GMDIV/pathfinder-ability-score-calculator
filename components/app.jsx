import React from 'react';
import AbilityScores from './AbilityScores.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}

	
	render(){
		return (
			<div>
				<AbilityScores />
			</div>
		)
	}

}