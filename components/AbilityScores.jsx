import React from 'react';

export default class AbilityScores extends React.Component {

	constructor(props) {
		super(props);
		
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
			race: null
		}		
	}

	render(){
		return (
			<div>
				<table>
					<thead>
					  <tr>
					    <th>Ability</th>
					    <th>Purchased</th> 
					    <th>Racial Mod</th>
					    <th>Final Ability Score</th>
					  </tr>
				  	</thead>
				  	<tbody>
					  <tr>
					    <td>Strength</td>
					    <td>{this.state.strength}</td> 
					    <td>(0)</td>
					    <td>{this.state.strengthTotal}</td>
					  </tr>
					  <tr>
					    <td>Dexterity</td>
					    <td>{this.state.dexterity}</td> 
					    <td>(0)</td>
					    <td>{this.state.dexterityTotal}</td>
					  </tr>
					  <tr>
					    <td>Constitution</td>
					    <td>{this.state.constitution}</td> 
					    <td>(0)</td>
					    <td>{this.state.constitutionTotal}</td>
					  </tr>
					  <tr>
					    <td>Intelligence</td>
					    <td>{this.state.intelligence}</td> 
					    <td>(0)</td>
					    <td>{this.state.intelligenceTotal}</td>
					  </tr>
					  <tr>
					    <td>Wisdom</td>
					    <td>{this.state.wisdom}</td> 
					    <td>(0)</td>
					    <td>{this.state.wisdomTotal}</td>
					  </tr>
					  <tr>
					    <td>Charisma</td>
					    <td>{this.state.charisma}</td> 
					    <td>(0)</td>
					    <td>{this.state.charismaTotal}</td>
					  </tr>
					</tbody>
				</table>
			</div>
		)
	}
};