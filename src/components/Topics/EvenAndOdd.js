import React, { Component } from 'react';

export default class EvensAndOdds extends Component {
        constructor(){
            super();
            this.state = {
            evensArray: [],
            oddsArray: [],
            userInput: '',
        }
    }

        handleChange(val) {
        this.setState({ userInput: val });
      }

        assignEvenAndOdds(userInput) {
            const splitStr = userInput.split(',');
            const evens = [];
            const odds = [];            

            for(let i = 0; i < splitStr.length; i++){
            if (splitStr[i] % 2 === 0){
                evens.push(splitStr[i])
                console.log('evens', evens);
            } else {
                odds.push(splitStr[i])
                console.log('odds', odds);
            }
            this.setState({evensArray: evens, oddsArray: odds, userInput: ''})
        }
    }
        
        render() {
            return (
            <div className="puzzleBox evenAndOddPB">
              <h4> Evens and Odds </h4>
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
              <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
              <span className="resultsBox"> Evens: { JSON.stringify(this.state.evensArray) } </span>
              <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddsArray) } </span>
            </div>
            )}
}