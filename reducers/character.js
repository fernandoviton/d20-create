import Immutable from 'immutable'

import abilities from '../reducers/abilities'
import skills from '../reducers/skills'

export default (state = defaultState, action) => {

	state = {...state, skills: skills(state.skills, action)}

	switch (action.type) {
		default:
			return state
	}
}

const defaultState = {
	name: undefined,
	abilities: new Map(),
}