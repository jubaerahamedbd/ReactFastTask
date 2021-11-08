import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClassComponent extends Component {
    constructor(){
        super()
        this.state= {
            CityName: ["Berlin","Dhaka"],
            CountryName: {
                Asia : "Bangladesh",
                Europe : "Germany"
            }
        }
    }
    DoThis(e){
        alert(e)
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.DoThis.bind(this,"I am from Class Parameter")}>Click Me From Class</button>
                <h4>City Name: {this.state.CityName[0]}</h4>
                <h4>Country Name: {this.state.CountryName.Europe}</h4>
            </div>
        )
    }
}

export default ClassComponent;