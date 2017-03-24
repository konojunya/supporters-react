import React from "react"

import Child from "./Child.jsx"

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      name: "konojunya",
      age: 20
    }
  }

  render(){
    return(
      <div>
        <Child
          name={this.state.name}
          age={this.state.age}
        />
        <Child
          name={"橋本環奈"}
          age={18}
        />
      </div>
    )
  }

}