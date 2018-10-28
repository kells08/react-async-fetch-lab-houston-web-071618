// create your App component here
import React, { Component } from 'react';
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'
 class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }
   render () {
    return (
      <div>
        <Greeting />
        <ExampleComponent info={this.state.peopleInSpace}/><br></br>
        <Button />
      </div>
    )
  }
   componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ peopleInSpace: data.people } )
    })
  }
}
 export default App
