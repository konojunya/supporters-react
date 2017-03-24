import React from "react"

export default class Child extends React.Component{

  render(){
    return(
      <div>
        <h1>My name is {this.props.name}</h1>
        <p>{this.props.age} years old.</p>
      </div>
    )
  }

}