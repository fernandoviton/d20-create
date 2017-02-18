import Immutable from 'immutable'

import abilities from '../reducers/abilities'
import skills from '../reducers/skills'

export default (state, action) => {

	switch (action.type) {
		case undefined:
			return defaultState

		case 'INIT':
			return defaultState

		case 'INCREASE_BALANCE_SKILL':
			const oldSkill = state.skills.get('balance')
			const newSkill = {...oldSkill, ranks: oldSkill.ranks + 1}
			return {...state,
				skills: state.skills.set('balance', newSkill)
			}
		default:
			return state
	}
}

export const createSkill = (ranks, abilityMod) => {
	return {
		ranks,
		abilityMod
	}
}

const defaultState = {
	name: undefined,
	abilities: new Map(),
	skills: Immutable.Map({'balance': createSkill(0, 0)})
}