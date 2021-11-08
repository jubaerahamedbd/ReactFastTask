import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Refresh extends Component {
    constructor() {
        super()
        this.refteshNow = this.refteshNow.bind(this)
    }
    refteshNow() {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <button onClick={this.refteshNow}>Refresh Button</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}


export default Refresh;