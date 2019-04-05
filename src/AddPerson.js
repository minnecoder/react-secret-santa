import React, { Component } from 'react';
import styled from 'styled-components';
import PersonList from './PersonList';

class AddPerson extends Component {
  state = {
    people: [],
  };

  add = () => {
    const newPerson = {
      name: this.name.value,
      spouseName: this.spouseName.value,
      child1: this.child1.value,
      child2: this.child2.value,
    };

    this.setState({ people: [...this.state.people, newPerson] });

    this.name.value = '';
    this.spouseName.value = '';
    this.child1.value = '';
    this.child2.value = '';
  };

  render() {
    const { people } = this.state;
    return (
      <div>
        <h3>Add Person</h3>
        <p>
          Only enter the names of people that will be participating in the
          Secret Santa drawing
        </p>
        <InputGrid>
          <label>
            Name:
            <TextInput type="text" ref={input => (this.name = input)} />
          </label>
          <label>
            Spouse Name:
            <TextInput type="text" ref={input => (this.spouseName = input)} />
          </label>
          <label>
            Child 1 Name:
            <TextInput type="text" ref={input => (this.child1 = input)} />
          </label>
          <label>
            Child 2 Name:
            <TextInput type="text" ref={input => (this.child2 = input)} />
          </label>
        </InputGrid>
        <button type="submit" onClick={this.add}>
          Add Person
        </button>
        <PersonList people={people} />
      </div>
    );
  }
}

export default AddPerson;

const InputGrid = styled.div`
  width: 30%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  grid-gap: 10px;
  padding-bottom: 20px;
`;
const TextInput = styled.input`
  margin-left: 5px;
`;
