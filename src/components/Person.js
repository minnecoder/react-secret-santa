import React from 'react';
import '../App.css';

const Person =({type})=> {
    let person;
    if (type === "business") { 
        person = <p>Name: {}</p>
    }
    else if (type === "nokids") { 
        person = <div >
                    <p>Name: {}</p>
                    <p>Spouse: {}</p>
                </div>
    } else {
        person = <div >
                    <p>Name: {}</p>
                    <p>Spouse: {}</p>
                    <p>Child 1: {}</p>
                    <p>Child 2: {}</p>
                </div>
    }
    return (
      <div >
        {person}
      </div>
    );
}

export default Person;