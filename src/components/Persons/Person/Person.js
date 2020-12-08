import React, { Component } from 'react';
// import './Person.css';
import classes from './Person.css';
import styled from 'styled-components';

import Aux from '../../../hoc/Auxiliary';

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

class Person extends Component {
  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '450px',
  //   },
  // };

  render() {
    return (
      <StyledDiv>
        <p onClick={this.props.click}>
          I am a {this.props.name} I am years old {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>

      // <Aux>
      //   <p onClick={this.props.click}>
      //     I am a {this.props.name} I am years old {this.props.age}
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type='text'
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </Aux>

      //  <React.Fragment>
      //   <p onClick={this.props.click}>
      //     I am a {this.props.name} I am years old {this.props.age}
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type='text'
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </React.Fragment>
    );
  }
}

export default Person;
