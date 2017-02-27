import Immutable from 'immutable'

export default (state = Immutable.Map(), action) => {
	switch (action.type) {
		case 'CHANGE_ABILITY':
			const oldAbility = ensureAbility(state.get(action.name))
			const newAbility = {...oldAbility, value: oldAbility.value + action.changeAmount}
			return state.set(action.name, newAbility)
	}
	return state
}

export const createAbility = (value) => ({
	value
})

const ensureAbility = (ability = {
		value: 0,
	}) => {
	return ability
}