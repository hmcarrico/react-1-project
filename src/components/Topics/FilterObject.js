import React, { Component } from 'react';

export default class FilterObject extends Component {
    
    constructor() {
        super();
    
        this.state = {
          employees: [
            {
              name: 'Jimmy Joe',
              title: 'Hack0r',
              age: 12,
            },
            {
              name: 'Jeremy Schrader',
              age: 24,
              hairColor: 'brown'
            },
            {
              name: 'Carly Armstrong',
              title: 'CEO',
            }
          ],
    
          userInput: '',
          filteredEmployees: []
        }
      }

        handleChange = (event) => {
            this.setState({ userInput: event.target.value});
            console.log(this.state.userInput);
         }

         filterEmployees = (prop) => {
          var employee = this.state.employees;
          console.log(this.state.userInput);
          const filtEmpl = [];

          // const filtEmpl = employee.filter(item => item[this.state.userInput])

              for (let i=0; i<employee.length; i++ ) {
                if (employee[i][this.state.userInput]) {
                  console.log(employee[i][this.state.userInput]);
                 filtEmpl.push(employee[i]);
                }
             }

              this.setState({filteredEmployees: filtEmpl});
        }
    render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={this.handleChange}></input>
        <button className="confirmationButton" onClick={this.filterEmployees}> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )}
} 