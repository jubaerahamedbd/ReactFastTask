import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function FunctionalComponent(props){
    function DoThis(e){
        alert(e)
    }
    return(
        <div>
            <button className="btn btn-primary" onClick={DoThis.bind(this,"I am from Function Parameter")}>Click Me From Function</button>
            <h3>Name: {props.name} and Age: {props.age}</h3>
        </div>
    )
}

export default FunctionalComponent;