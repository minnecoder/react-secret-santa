import React, { Component } from 'react';
import styled from 'styled-components';

class PersonList extends Component {
  render() {
    const { people } = this.props;
    return (
      <div>
        {people.map(person => (
          <div key={person.name}>
            <h2>{person.name}</h2>
            <h2>{person.spouseName}</h2>
            <h2>{person.child1}</h2>
            <h2>{person.child2}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
