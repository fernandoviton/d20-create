'use babel'

import React from 'react'
import { addToSequence } from '../actions/index.js'
import Skills from './skills.jsx'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    var key = 0;

    return <div>
      <button onClick={() => store.dispatch(addToSequence())}>+</button>
      <div>
      {
        store.getState().numbers.map((i) => {
          key = key + 1
          return <button key={key}>{i}</button>
        })
      }
      </div>
      <Skills/>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
