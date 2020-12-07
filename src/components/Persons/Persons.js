import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
      >
        My Hobbies: Planting
      </Person>
    );
  });

export default persons;
