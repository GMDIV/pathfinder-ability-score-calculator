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
			raceContainer.push(list[race.racialModifierList]);
		}
		console.log("list", list) //object containing all of the race objects
		console.log(list.wayang.name) //'Wayang'
		console.log("raceContainer", raceContainer)//array of objects that contain the data for each race
		return(
			<div>
				<select onChange={this.state.raceChange}>
					<option>Select Race</option>
					{  
					 	Object.keys(list).map(function(race){
					 		console.log("race object", list[race]) //object containing the data of the particular race
					 		console.log("Name of race:",race) //Name of race
					 		console.log("Name string of race:", list[race].name)
							return(
								<option key={list[race].name} value={list[race].name}>
									{list[race].name}
								</option>
							)

						})
					}
				</select>
			</div>
		)
	}
}

				// <select onChange={this.state.raceChange}>
				// 	<option>Select Race</option>
				// 	{  
				// 	 	raceContainer.map(function(race){
				// 	 		console.log(race.racialModifierList) //object containing the data of the particular race
				// 	 		console.log(race.racialModifierList.name) //Name of race
				// 			return(

				// 				<option key={race.racialModifierList.name} value={race.racialModifierList.name}>
				// 					{race.racialModifierList.name}
				// 				</option>
				// 			)

				// 		})
				// 	}
				// </select>