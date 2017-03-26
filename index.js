import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import root from './reducers/root';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from './middleware/reduxLogger'

import { changeSkillRank, changeAbility } from './actions/index'

import abilities from './schema/abilities.json'
import Immutable from 'immutable'

const store = createStore(root, applyMiddleware(reduxLogger))
store.dispatch({type:'INIT'})
console.log('created store', store.getState())
const render = () => ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'))

store.subscribe(render)

window.onload = function()
{
  store.dispatch(changeSkillRank('balance', 0))
  store.dispatch(changeSkillRank('climb', 0))

	loadAbilities(abilities)

	console.log(JSON.stringify(store.getState()))
	console.log(JSON.parse(JSON.stringify(store.getState())))

	render()
}

const loadAbilities = (json) => {
	var map = Immutable.fromJS(json)

	map.map( (v, k) => {store.dispatch(changeAbility(k, 0))})
}
