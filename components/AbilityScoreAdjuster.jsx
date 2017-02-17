import React from 'react';
import ArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import ArrowUp from 'react-icons/lib/md/keyboard-arrow-up';

export default class AbilityScoreAdjuster extends React.Component {
    constructor(props) {
        super(props);
        console.log("heyyyy!");
        this.state = {
            score: this.props.score,
            total: 0
        };
        console.log("post state declaration",this.state.score)
        console.log("this.props.score", this.props.score)
    }

    increaseScore() {
        console.log("increase intitiated...")
        this.setState({score: this.state.score + 1});
        console.log("increase complete!")
    }
    decreaseScore() {
        var newScore = this.state.score > 0 ? this.state.score - 1 : 0;
        this.setState({score: newScore});
    }


    render(){
        //console.log("yoooo!");
       console.log("beginning render",this.state.score);
        return (
            <div>
                <button>{this.state.score}
                <ArrowUp  onClick={()=> this.increaseScore()} />
                <ArrowDown onClick={() => this.decreaseScore()} />
                </button>
            </div>
        )
    }
}