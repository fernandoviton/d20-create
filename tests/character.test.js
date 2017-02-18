import Immutable from 'immutable'

import { increaseBalanceSkill } from '../actions/index.js'
import character, { createSkill } from '../reducers/character'

test('default character state', () => {
})

test('increasing skill ranks', () => {
	const newState = character({skills: Immutable.Map({'balance': createSkill(1, 0)})},
		increaseBalanceSkill())
	expect(newState.skills.get('balance')).toEqual(createSkill(2,0))
})