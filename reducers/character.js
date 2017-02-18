import Immutable from 'immutable'

import abilities from '../reducers/abilities'
import skills from '../reducers/skills'

export default (state, action) => {

	switch (action.type) {
		case undefined:
			return defaultState

		case 'INCREASE_BALANCE_SKILL':
			const oldSkill = state.skills.get('balance')
			const newSkill = {...oldSkill, rank: oldSkill.rank + 1}
			return {...state,
				skills: state.skills.set('balance', newSkill)
			}
		default:
			return state
	}
}

export const createSkill = (rank, abilityMod) => {
	return {
		rank,
		abilityMod
	}
}

const defaultState = {
	name: undefined,
	abilities: new Map(),
	skills: Immutable.Map({'balance': createSkill(0, 0)})
}