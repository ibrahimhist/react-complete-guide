import React from 'react';

import styled from 'styled-components';

import './Cockpit.css';
// import classes from './Person.css';

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

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push('red');
  }

  if (props.persons.length <= 1) {
    assignedClasses.push('bold');
  }

  return (
    <div>
      <h1>Hi, I am React</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>

      <StyledButton
        alt={props.showPersons}
        key='btn2'
        onClick={() => props.clicked()}
      >
        Toggle persons
      </StyledButton>
    </div>
  );
};

export default cockpit;