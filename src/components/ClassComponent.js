import React, { Component } from "react";

class ClassComponent extends Component {

    DoThis(){
        alert("Button is Clicked From Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.DoThis}>Click Me From Class</button>
                <h4>City Name: {this.props.cityname}</h4>
            </div>
        )
    }
}

export default ClassComponent;