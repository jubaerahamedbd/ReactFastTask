import React from "react";

function FunctionalComponent(props){
    function DoThis(e){
        alert(e)
    }
    return(
        <div>
            <button onClick={DoThis.bind(this,"I am from Function Parameter")}>Click Me From Function</button>
            <h3>Name: {props.name} and Age: {props.age}</h3>
        </div>
    )
}

export default FunctionalComponent;