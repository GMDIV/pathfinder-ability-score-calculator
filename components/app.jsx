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
	raceChange(event){
		this.setState({race: event.target.value})
		//this.setState({race: })
		console.log("yo race change time")
		console.log("new race selected: ", this.state.race)
	}
	
	render(){
		console.log("App render - this.state.race is....: ", this.state.race)
		return (
			<div>
				<RaceList raceChange={this.raceChange.bind(this)} raceData={this.state.allRaces} />
				<AbilityScores race={this.state.race} />
			</div>
		)
	}

}