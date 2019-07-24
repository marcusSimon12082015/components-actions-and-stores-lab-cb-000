import React, { Component } from 'react'
import BandIndex  from './band_index_component';

export default class BandInputComponent extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', payload: {title: 'New Band'}})
  }

  render(){
    return(
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Enter Band: </label>
            <input />
            <button type="submit">Submit</button>
          </form>
          <h1>Bands</h1>
            <ul>
                {this.props.store.getState().map((band, i) => <BandIndex key={i} band={band} />)}
            </ul>
        </div>
    )
  }
}
