import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }

      handleChange(val) {
        this.setState({userInput: val});
      }
    
      isPalindrome(userInput) {
        let word = [];
        let splitWord = userInput.split('')
        let reverseArray = splitWord.reverse()
        let joinArray = reverseArray.join('')

        if(joinArray === userInput){
            word.push('true');
        } else {
            word.push('false');
        }
        console.log(word);
        this.setState({palindrome: word})
    }
  
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}