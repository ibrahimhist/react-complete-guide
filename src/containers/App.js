import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHanddler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <Aux>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHanddler}
        ></Cockpit>
        {persons}
      </Aux>

      // <WithClass classes={classes.App}>
      //   <Cockpit
      //     persons={this.state.persons}
      //     showPersons={this.state.showPersons}
      //     clicked={this.togglePersonHanddler}
      //   ></Cockpit>
      //   {persons}
      // </WithClass>
    );
  }
}

export default withClass(App, classes.App);
