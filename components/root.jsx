'use babel'

import React from 'react'
import { addToSequence } from '../actions/index.js'
import Skills from './skills.jsx'
import Abilities from './abilities.jsx'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    var key = 0;

    return <div>
      <button onClick={() => store.dispatch(addToSequence())}>+</button>
      <Skills/>
      <Abilities/>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
