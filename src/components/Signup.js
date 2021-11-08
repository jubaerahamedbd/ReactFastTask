import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
        }
    }
    onChangeHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        if (event.target.name === 'fname') {
            var namePattern = /^([a-zA-Z ]){2,30}$/
            if (!namePattern.test(event.target.value)) {
                this.setState({ fname: "First Name Is Not Valid" })
            }
        }
        if (event.target.name === 'lname') {
            var namePattern = /^([a-zA-Z ]){2,30}$/
            if (!namePattern.test(event.target.value)) {
                this.setState({ lname: "Last Name Is Not Valid" })
            }
        }
        if (event.target.name === 'email') {
            var emailPattern = /\S+@\S+\.\S+/
            if (!emailPattern.test(event.target.value)) {
                this.setState({ email: "Email Is Not Valid" })
            }
        }
        if (event.target.name === 'mobile') {
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if (!Number(event.target.value)) {
                this.setState({ mobile: "Mobile No Not Valid" })
            }
        }



    }
    render() {
        return (
            <div>
                <form>
                    <p>First Name: {this.state.fname}</p>
                    <p>Last Name: {this.state.lname}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Mobile No: {this.state.mobile}</p>
                
                    <input onChange={this.onChangeHandler} name='fname' type='text' placeholder='First Name' /><br />
                    <input onChange={this.onChangeHandler} name='lname' type='text' placeholder='Last Name' /><br />
                    <input onChange={this.onChangeHandler} name='email' type='text' placeholder='Email' /><br />
                    <input onChange={this.onChangeHandler} name='mobile' type='text' placeholder='Mobile' /><br />
                    <input name='submit' type='submit' value='Save Now' />
                </form>
            </div>
        );
    }
}

export default Signup;