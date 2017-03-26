import Immutable from 'immutable'
import { changeSkillRank, setSkillAbilityModifier } from '../actions/index.js'
import skills, { createSkill } from '../reducers/skills'

test('default skills state', () => {
	expect(skills(undefined, {type: undefined})).toEqual(Immutable.Map())
})

describe('changing skill rank', () => {
	test('of existing updates rank', () => {
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

describe('set skill ability modifier', () => {
	test('of existing skill updates it', () => {
		const map = Immutable.Map({'anything': createSkill(1, 2)})
		expect(skills(map, setSkillAbilityModifier('anything', 3)).get('anything').abilityMod).toEqual(3)
		expect(skills(map, setSkillAbilityModifier('anything', -1)).get('anything').abilityMod).toEqual(-1)
	})

	test('of new skill creates skill', () => {
		expect(skills(Immutable.Map(), setSkillAbilityModifier('anything', 3)).get('anything').abilityMod).toEqual(3)
		expect(skills(Immutable.Map(), setSkillAbilityModifier('anything', -1)).get('anything').abilityMod).toEqual(-1)
	})

	test('doesnt affect other skill ability modifiers', () => {
		const map = Immutable.Map({'someSkill': createSkill(1, 2)})
		expect(skills(map, setSkillAbilityModifier('anotherSkill', 3)).get('someSkill').abilityMod).toEqual(2)
	})
})
