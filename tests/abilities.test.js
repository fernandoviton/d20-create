import Immutable from 'immutable'
import { } from '../actions/index.js'
import abilities from '../reducers/abilities'

test('default abilities state', () => {
	expect(abilities(undefined, {type: undefined})).toEqual(Immutable.Map())
})