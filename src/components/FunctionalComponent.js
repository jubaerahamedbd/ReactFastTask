import React from "react";

function FunctionalComponent(props){
    function DoThis(){
        alert("Button is Clicked From Function")
    }
    return(
        <div>
            <button onClick={DoThis}>Click Me From Function</button>
            <h3>Name: {props.name} and Age: {props.age}</h3>
        </div>
    )
}

export default FunctionalComponent;