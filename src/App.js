import React, { Component } from 'react';
import classes from './App.css';
import styled from 'styled-components';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'İbo', age: 28 },
      { id: 2, name: 'Test', age: 29 },
      { id: 3, name: 'Test2', age: 22 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons: [{ name: newName, age: 32 }],
    });
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];

    const person = persons.find((x) => x.id === id);
    person.name = event.target.value;

    this.setState({ persons: persons });
  };

  togglePersonHanddler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePersonHanddler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHanddler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              >
                My Hobbies: Planting
              </Person>
            );
          })}
        </div>
      );
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am React</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        {/* <button
          key='btn1'
          style={style}
          onClick={() => this.switchNameHandler('Maxi')}
        >
          Switch Name
        </button> */}

        <StyledButton
          alt={this.state.showPersons}
          key='btn2'
          onClick={() => this.togglePersonHanddler()}
        >
          Toggle persons
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;
