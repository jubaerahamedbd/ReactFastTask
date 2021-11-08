import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    onChangeHandler = (event) => {
        var newName = event.target.name
        var newValue = event.target.value
        this.setState({
            [newName]: newValue
        })
        
    }
    render() {
        return (
            <div>
                <form>
                    <p>First Form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} className="my-2" type='text' placeholder='Your Name'></input><br />
                    <input type='submit' value='Submit Now'></input>
                </form>
            </div>
        );
    }
}

export default Form;