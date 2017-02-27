import Immutable from 'immutable'
import { changeSkillRank } from '../actions/index.js'
import skills, { createSkill } from '../reducers/skills'

test('default skills state', () => {
	expect(skills(undefined, {type: undefined})).toEqual(Immutable.Map())
})

describe('changing skill rank', () => {
	test('of existing increases rank', () => {
		const map = Immutable.Map({'anything': createSkill(1)})
		expect(skills(map, changeSkillRank('anything', 1)).get('anything').ranks).toEqual(2)
		expect(skills(map, changeSkillRank('anything', -2)).get('anything').ranks).toEqual(-1)
	})

	test('of new skill sets rank', () => {
		expect(skills(Immutable.Map(), changeSkillRank('anything', 1)).get('anything').ranks).toEqual(1)
		expect(skills(Immutable.Map(), changeSkillRank('anything', -2)).get('anything').ranks).toEqual(-2)
	})

	test('doesnt affect other skill ranks', () => {
		const map = Immutable.Map({'someSkill': createSkill(1)})
		expect(skills(map, changeSkillRank('anotherSkill', 2)).get('someSkill').ranks).toEqual(1)
	})
})