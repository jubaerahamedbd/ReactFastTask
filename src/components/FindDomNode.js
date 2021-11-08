import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';

class FindDomNode extends Component {
    ChangeImage(){
        var imgID = document.getElementById(imgID)
        //ReactDOM.findDOMNode(imgID).src="https://jubaerahamedbd.github.io/hot-gadgets/img/product-2.png";
    }
    render() {
        return (
            <div>
                <button onClick={this.ChangeImage}>Change Image</button><br/>
                <img id="imgID" src="https://jubaerahamedbd.github.io/hot-gadgets/img/product-3.png"/>
            </div>
        );
    }
}

export default FindDomNode;