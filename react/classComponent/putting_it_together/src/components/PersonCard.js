import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state ={
            birthday: this.props.age

        }
    }
    birthday = (e)=> {
        
        this.setState({birthday: this.state.birthday + 1})
    }
    render(){
        return(
        
            <div>
                    <h1>{this.props.lastname}, {this.props.firstname}</h1>
                    <p>Age: {this.state.birthday}</p>
                    <p>Hair color: {this.props.haircolor}</p>
                    <button onClick={this.birthday}>Birthday button for {this.props.firstname} {this.props.lastname}</button>
            </div>

        )
    }
}
export default PersonCard