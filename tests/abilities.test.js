import Immutable from 'immutable'
import { changeAbility } from '../actions/index.js'
import abilities, { createAbility } from '../reducers/abilities'

test('default abilities state', () => {
	expect(abilities(undefined, {type: undefined})).toEqual(Immutable.Map())
})

describe('changing ability', () => {
	test('of existing ability', () => {
		const map = Immutable.Map({'anything': createAbility(1)})
		expect(abilities(map, changeAbility('anything', 1)).get('anything').value).toEqual(2)
		expect(abilities(map, changeAbility('anything', -2)).get('anything').value).toEqual(-1)
	})

	test('of new ability', () => {
		expect(abilities(Immutable.Map(), changeAbility('anything', 1)).get('anything').value).toEqual(1)
		expect(abilities(Immutable.Map(), changeAbility('anything', -2)).get('anything').value).toEqual(-2)
	})
	// TODO: validate negative is error

	test('doesnt affect other abilities', () => {
		const map = Immutable.Map({'something': createAbility(1)})
		expect(abilities(map, changeAbility('somethingElse', 2)).get('something').value).toEqual(1)
	})
})