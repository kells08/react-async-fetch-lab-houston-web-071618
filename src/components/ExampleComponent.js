import React, { Component } from 'react';

class ExampleComponent extends Component {

 generatePeopleDivs = () => {
    return this.props.info.map(person => {
      return (
        <div>
          <h2>Name: {person.name}</h2>
          <h3>Craft: {person.craft}</h3>
        </div>
      )
    })
  }
render() {
  return (
    <strong>
      {this.generatePeopleDivs()}
    </strong>
   )
 }
 
}
export default ExampleComponent;
