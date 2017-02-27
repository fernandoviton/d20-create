import Immutable from 'immutable'
import { changeAbility, loadCharacter } from '../actions/index.js'
import abilities, { createAbility } from '../reducers/abilities'

test('default abilities state', () => {
	expect(abilities(undefined, {type: undefined})).toEqual(Immutable.Map())
})

test('loading character loads abilities', () => {
	var abilitiesToLoad = [createAbility('a', 1), createAbility('b', 3)]
	expect(abilities(undefined, loadCharacter(abilitiesToLoad, undefined))).toEqual(expected(abilitiesToLoad[0], abilitiesToLoad[1]))
})

describe('changing ability', () => {
	test('of existing ability', () => {
		const map = Immutable.Map({'a': createAbility('a', 3)})
		expect(abilities(map, changeAbility('a', 1))).toEqual(expected(createAbility('a', 4)))
		expect(abilities(map, changeAbility('a', -2))).toEqual(expected(createAbility('a', 1)))
	})

	test('of new ability', () => {
		expect(abilities(Immutable.Map(), changeAbility('a', 4))).toEqual(expected(createAbility('a', 4)))
	})
	// TODO: validate negative is error

	test('doesnt affect other abilities', () => {
		const map = Immutable.Map({'something': createAbility('something', 1)})
		expect(abilities(map, changeAbility('somethingElse', 2)).get('something').value).toEqual(1)
	})
})

const expected = (ability1, ability2) => {
	let a = Immutable.Map()
	a = a.set(ability1.name, ability1)
	if (ability2 !== undefined)
		a = a.set(ability2.name, ability2)
	return a
}