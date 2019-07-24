import React, { Component } from 'react'
export default class BandInputComponent extends Component {
  onSubmit(){
    
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
