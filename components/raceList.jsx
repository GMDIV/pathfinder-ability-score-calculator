import React from 'react';
import AbilityScores from './AbilityScores.jsx';
import App from './App.jsx';

export default class RaceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			raceData: this.props.raceData,
			raceChange: this.props.raceChange
		}
	}

	render(){

		console.log("props", this.state.raceData)
		var list = this.state.raceData.racialModifierList;
		var raceContainer = [];
		for(var race in list){
			raceContainer.push(list[race]);
		}
		console.log(list) //object containing all of the race objects
		console.log(list.wayang.name) //'Wayang'
		console.log(raceContainer)//array of objects that contain the data for each race
		return(
			<div>
				<select>
					{  
					 	raceContainer.map(function(race){
					 		console.log(race) //object containing the data of the particular race
					 		console.log(race.name) //Name of race
							return(

								<option key={race.name} value={race.name}>
									{race.name}
								</option>
							)

						})
					}
				</select>
			</div>
		)
	}
}