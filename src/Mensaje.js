import React, { Component } from 'react';

class Mensaje extends Component {

    constructor(props){
        super(props)
        this.state = {
            fullName: null

        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {fullName} = this.state
        return (
        <div>
            <p> Full name is: {fullName}</p>
            <form onSubmit={this.handleSubmit}>
                <p><input type='text' placeholder='Your Name' name='fullName' onChange={this.handleInputChange}></input></p>
                <p><button>Click Me</button></p>
            </form>
        </div>
        )
    }
  }

  export default Mensaje;
