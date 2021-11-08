import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            CityName: "Berlin"
        }
    }
    DoThis(e) {
        this.setState({
            CityName: e
        })
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.DoThis.bind(this, "Dhaka")}>Change State</button>
                <h4>City Name: {this.state.CityName}</h4>
            </div>
        )
    }
}

export default ClassComponent;