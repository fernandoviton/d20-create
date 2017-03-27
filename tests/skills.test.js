import Immutable from 'immutable'
import { changeSkillRank, initSkill } from '../actions/index.js'
import skills, { createSkill } from '../reducers/skills'
import { createAbility } from '../reducers/abilities'

test('default skills state', () => {
	expect(skills(undefined, {type: undefined})).toEqual(Immutable.Map())
})

describe('changing skill rank', () => {
	test('of existing updates rank', () => {
		const map = Immutable.Map({'anything': createSkill(1)})
		expect(skills(map, changeSkillRank('anything', 1), emptyProps).get('anything').ranks).toEqual(2)
		expect(skills(map, changeSkillRank('anything', -2), emptyProps).get('anything').ranks).toEqual(-1)
	})

	test('of new skill sets rank', () => {
		expect(skills(Immutable.Map(), changeSkillRank('anything', 1), emptyProps).get('anything').ranks).toEqual(1)
		expect(skills(Immutable.Map(), changeSkillRank('anything', -2), emptyProps).get('anything').ranks).toEqual(-2)
	})

	test('doesnt affect other skill ranks', () => {
		const map = Immutable.Map({'someSkill': createSkill(1)})
		expect(skills(map, changeSkillRank('anotherSkill', 2), emptyProps).get('someSkill').ranks).toEqual(1)
	})

	test('uses abilities in props to calc', () => {
		const map = Immutable.Map({'anything': createSkill(1, 'ability1')})
		const props = {'abilities': Immutable.Map({'ability1' : createAbility('ability1', 2)})}
		expect(skills(map, changeSkillRank('anything', 0), props).get('anything').total).toEqual(3)
	})

	test('doesnt change ability name', () => {
		const map = Immutable.Map({'anything': createSkill(1, 'ability1')})
		expect(skills(map, changeSkillRank('anything', 1), emptyProps).get('anything').abilityName).toEqual('ability1')
	})
})

describe('init skill', () => {
	test('of unknown ability', () => {
		const newSkills = skills(Immutable.Map({}), initSkill('anything', 'ability1', 1), emptyProps)
		expect(newSkills.get('anything').ranks).toEqual(1)
		expect(newSkills.get('anything').abilityName).toEqual('ability1')
		expect(newSkills.get('anything').abilityMod).toEqual(0)
		expect(newSkills.get('anything').total).toEqual(1)
	})
	test('of ability that is props uses that', () => {
		const props = {'abilities': Immutable.Map({'ability1' : createAbility('ability1', 2)})}
		const newSkills = skills(Immutable.Map({}), initSkill('anything', 'ability1', 1), props)
		expect(newSkills.get('anything').ranks).toEqual(1)
		expect(newSkills.get('anything').abilityName).toEqual('ability1')
		expect(newSkills.get('anything').abilityMod).toEqual(2)
		expect(newSkills.get('anything').total).toEqual(3)

	})
})


const emptyProps = {'abilities' : Immutable.Map({})}