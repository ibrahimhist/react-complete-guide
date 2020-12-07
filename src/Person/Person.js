import React from 'react';
// import './Person.css';
import classes from './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;

  @media (min-width: 500px) {
    width: 500px;
  }
`;

const person = (props) => {
  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '450px',
  //   },
  // };

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I am a {props.name} I am years old {props.age}
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
