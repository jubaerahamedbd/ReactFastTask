import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClassComponent extends Component {

    DoThis(e){
        alert(e)
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.DoThis.bind(this,"I am from Class Parameter")}>Click Me From Class</button>
                <h4>City Name: {this.props.cityname}</h4>
            </div>
        )
    }
}

export default ClassComponent;