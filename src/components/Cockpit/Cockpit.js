import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import './Cockpit.css';
// import classes from './Person.css';

import AuthContext from '../../context/auth-context';

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt === 'true' ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.alt === 'true' ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

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
        ref={toggleBtnRef}
        alt={props.showPersons.toString()}
        key='btn2'
        onClick={() => props.clicked()}
      >
        Toggle persons
      </StyledButton>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default cockpit;
