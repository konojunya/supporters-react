import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import Child from "./Child.jsx"
import MaterialComponent from "./MaterialComponent.jsx"

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
        <MuiThemeProvider>
          <MaterialComponent/>
        </MuiThemeProvider>
        <Child
          name={this.state.name}
          age={this.state.age}
        />
      </div>
    )
  }

}