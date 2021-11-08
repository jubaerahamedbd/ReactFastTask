import React,{Component} from "react";

class ClassComponent extends Component{
    render(){
        return(
            <h4>City Name: {this.props.cityname}</h4>
        )
    }
}

export default ClassComponent;