import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'İbo', age: 28 },
      { id: 2, name: 'Test', age: 29 },
      { id: 3, name: 'Test2', age: 22 },
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  loginHanddler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHanddler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        ></Persons>
      );
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHanddler,
          }}
        >
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonHanddler}
            login={this.loginHanddler}
          ></Cockpit>
          {persons}
        </AuthContext.Provider>
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
