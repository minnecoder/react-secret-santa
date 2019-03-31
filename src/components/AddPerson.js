import React, { Component } from 'react';
import '../App.css';

class AddPerson extends Component {
  state = {
    name: "",
    spouse: "",
    child1: "",
    child2: ""
  }
  handleChange = (e) => {  
    this.setState({
          [e.target.id]: e.target.value
      })
  }

    render() {
        let addPersonForm;
        if (this.props.type === "business") { 
            addPersonForm = <form onSubmit={this.handleSubmit}>
                                <label htmlFor="">Name:</label>
                                <input type="text" id="name" onChange={this.handleChange} />
                                <button>Add</button>
                            </form>
        }
        else if (this.props.type === "nokids") { 
            addPersonForm = <form onSubmit={this.handleSubmit}>
                                <label htmlFor="">Name:</label>
                                <input type="text" id="name" onChange={this.handleChange}/>
                                <label htmlFor="">Spouse:</label>
                                <input type="text" id="spouse" onChange={this.handleChange}/>
                                <button>Add</button>
                            </form>
        } else {
            addPersonForm = <form onSubmit={this.handleSubmit}>
                                <label htmlFor="">Name:</label>
                                <input type="text" id="name" onChange={this.handleChange}/>
                                <label htmlFor="">Spouse:</label>
                                <input type="text" id="spouse" onChange={this.handleChange}/>
                                <label htmlFor="">Child 1:</label>
                                <input type="text" id="child1" onChange={this.handleChange}/>
                                <label htmlFor="">Child 2:</label>
                                <input type="text" id="child2" onChange={this.handleChange}/>
                                <button>Add</button>
                            </form>
        }
    return (
      <div >
        {addPersonForm}
      </div>
    );
  }
}

export default AddPerson;