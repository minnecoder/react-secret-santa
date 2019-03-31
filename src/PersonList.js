import React, { Component } from 'react';
import styled from "styled-components";


class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {this.props.people.map(person =>
                    <div  key={person.name}>
                        <h2>{person.name}</h2>
                        <h2>{person.spouseName}</h2>
                        <h2>{person.child1}</h2>
                        <h2>{person.child2}</h2>
                    </div>
                )}
            </div>
        )
    }
}

export default PersonList;