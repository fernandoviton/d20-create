import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import root from './reducers/root';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from './middleware/reduxLogger'

import { changeSkillRank, changeAbility } from './actions/index'

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

  store.dispatch(changeAbility('str', 0))
  store.dispatch(changeAbility('dex', 0))

	render()
}
