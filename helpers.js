
module.exports = {
	calculateAbilityScores: function(score){
		//possible ability scores
		var scores =    [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
		//ability modifiers based on the scores - 10 & 11 would be 0, 12 & 13 would be +1 
		var modifiers = [-5,-4,-4,-3,-3,-2,-2,-1,-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5,5,6,6,7,7];
		//the the cost of changing the point buy from an ability score of 10.
		var costs =     [ 0, 0, 0, 0, 0, 0,-4,-2,-1, 0, 1, 2, 3, 5, 7,10,13,17, 0, 0];
		
	},
	calculateRacialModifiers: function(){

	}
}