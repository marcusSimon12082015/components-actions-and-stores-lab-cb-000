import React, { Component } from 'react'
export default class BandInputComponent extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onSubmit(event){
    event.preventDefault();
    console.log("NOMG I'm in teh onSubmit() functions")
  }

  render(){
    return(
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Enter Band: </label>
            <input />
            <button type="submit">Submit</button>
          </form>
        </div>
    )
  }
}
