import { render } from './index.js'

export default function createStore(reducer){
    let state;
    let listeners = [];


    function dispatch(action){
      state = reducer(state, action)
      console.log(`the action is`)
      console.log(action)
      console.log(`the state is`)
      console.log(state)
      listeners.forEach(listener => listener())
      render()
    };

    function getState(){
      return state;
    }

    return {dispatch: dispatch, getState: getState}
  }
