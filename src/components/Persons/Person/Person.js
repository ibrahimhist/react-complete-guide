import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './Person.css';
import classes from './Person.css';
import styled from 'styled-components';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

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

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      // <StyledDiv>
      //   <p onClick={this.props.click}>
      //     I am a {this.props.name} I am years old {this.props.age}
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type='text'
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </StyledDiv>

      <Aux>
        <p onClick={this.props.click}>
          I am a {this.props.name} I am years old {this.props.age}
        </p>
        <p key='i2'>{this.props.children}</p>
        <input
          key='i3'
          ref={this.inputElement}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>

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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
