import React from 'react';
import AbilityScores from './AbilityScores.jsx';
import RaceData from '../raceData.js';
import RaceList from './RaceList.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.raceChange=this.raceChange.bind(this);
		this.state = {
			race: null,
			allRaces: RaceData
		};
	}
	raceChange(){
		//this.setState({race: })
		console.log("yo race change time")
	}
	
	render(){
		return (
			<div>
				<RaceList raceChange={this.raceChange.bind(this)} raceData={this.state.allRaces} />
				<AbilityScores race={this.state.race} />
			</div>
		)
	}

}