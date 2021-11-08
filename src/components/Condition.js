import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Condition extends Component {
    constructor() {
        super()
        this.state = {
            login: true
        }
    }   
    render() {
        if (this.state.login === true) {
            return (
                <button className="btn btn-danger" >Logout Button</button>
            )
        }
        else {
            return (
                <button className="btn btn-success">Login Button</button>
            )
        }
    }
}

export default Condition;