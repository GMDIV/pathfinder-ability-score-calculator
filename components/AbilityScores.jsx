import React from 'react';
import AbilityScoreAdjuster from './AbilityScoreAdjuster.jsx';
import raceData from '../raceData.js';
import RaceList from './RaceList.jsx';

export default class AbilityScores extends React.Component {

	constructor(props) {
		super(props);
		this.handleAdjustment = this.handleAdjustment.bind(this);
		this.state = {
			strength: 10,
			dexterity: 10,
			constitution: 10,
			intelligence: 10,
			wisdom: 10,
			charisma: 10,
			strengthTotal: 10,
			dexterityTotal: 10,
			constitutionTotal: 10,
			intelligenceTotal: 10,
			wisdomTotal: 10,
			charismaTotal: 10,
			strengthRacial: 0,
			dexterityRacial: 0,
			constitutionRacial: 0,
			intelligenceRacial: 0,
			wisdomRacial: 0,
			charismaRacial: 0,
			strengthModifier: 0,
			dexterityModifier: 0,
			constitutionModifier: 0,
			intelligenceModifier: 0,
			wisdomModifier: 0,
			charismaModifier: 0,
			currentRace: null,
			allRaces: raceData,
			cats: "catsssss"
		}		
	}

	handleAdjustment(attribute, newVal){
		console.log("Changing: ", attribute);
		var newObject = {};
		newObject[attribute] = newVal;
		console.log("newAttribute: ", newObject)
		this.setState(newObject);
		console.log("Changed: ", attribute);
		console.log("this.state.attribute = ", newVal);
		console.log(this.state.cats);
		this.logAttribute(attribute);
		this.updateModsAndBonuses(attribute);
		this.logAttribute(attribute);
	}

	logAttribute(attribute){
		console.log("this.state."+attribute + " logAttribute", this.state[attribute] )
	}

	updateModsAndBonuses(attribute){
		var bonus = {}; //create an object that will be used by setState
		var stat = attribute + "Modifier"; //stat is a value that joins attributes like strength with Modifier for strengthModifier
		var value = Math.round((this.state[attribute] - 10) / 2) //calculate the modifier bonus of the attribute
		console.log("bonus modifier is ", value) 
		bonus[stat] = value; //set the this.state.strengthModifier to equal the modifier bonus of strength
		this.setState(bonus); //update the value in state.
	}

	grabRace(race){

	}
	
	render(){
		console.log("this.state.strength isssss....", this.state.strength)
		console.log("this.state.allRaces ", this.state.allRaces)
		return (
			<div>
				<RaceList raceData={this.state.allRaces} />
				<table>
					<thead>
					  <tr>
					    <th>Ability</th>
					    <th>Purchased</th> 
					    <th>Racial Mod</th>
					    <th>Final Ability Score</th>
					    <th>Bonus</th>
					  </tr>
				  	</thead>
				  	<tbody>
					  <tr>
					    <td title="Modifies melee attack, melee damage, and how much you can carry.">Strength</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment.bind(this)} attribute="strength" score={this.state.strength} /></td> 
					    <td>{this.state.strengthRacial}</td>
					    <td>{this.state.strengthTotal}</td>
					    <td>{this.state.strengthModifier}</td>
					  </tr>
					  <tr>
					    <td title="Modifies ranged attack, dodge AC, CMD, and reflex saves.">Dexterity</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment} attribute="dexterity" score={this.state.dexterity} /></td> 
					    <td>{this.state.dexterityRacial}</td>
					    <td>{this.state.dexterityTotal}</td>
					    <td>{this.state.dexterityModifier}</td>
					  </tr>
					  <tr>
					    <td title="Modifies fortitude saves and bonus health.">Constitution</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment} attribute="constitution" score={this.state.constitution} /></td> 
					    <td>{this.state.constitutionRacial}</td>
					    <td>{this.state.constitutionTotal}</td>
					    <td>{this.state.constitutionModifier}</td>
					  </tr>
					  <tr>
					    <td title="Increases skill points per level and bonus languages.">Intelligence</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment} attribute="intelligence" score={this.state.intelligence} /></td> 
					    <td>{this.state.intelligenceRacial}</td>
					    <td>{this.state.intelligenceTotal}</td>
					    <td>{this.state.intelligenceModifier}</td>
					  </tr>
					  <tr>
					    <td title="Modifies will saves.">Wisdom</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment} attribute="wisdom" score={this.state.wisdom} /></td> 
					    <td>{this.state.wisdomRacial}</td>
					    <td>{this.state.wisdomTotal}</td>
					    <td>{this.state.wisdomModifier}</td>
					  </tr>
					  <tr>
					    <td title="Modifies social skills.">Charisma</td>
					    <td><AbilityScoreAdjuster handleChange={this.handleAdjustment} attribute="charisma" score={this.state.charisma} /></td> 
					    <td>{this.state.charismaRacial}</td>
					    <td>{this.state.charismaTotal}</td>
					    <td>{this.state.charismaModifier}</td>
					  </tr>
					</tbody>
				</table>
			</div>
		)
	}
};