import Immutable from 'immutable'

export default (state = Immutable.Map(), action) => {
	switch (action.type) {
		case 'CHANGE_ABILITY':
			const oldAbility = ensureAbility(action.name, state.get(action.name))
			const newAbility = {...oldAbility, value: oldAbility.value + action.changeAmount}
			return state.set(action.name, newAbility)
		case 'LOAD_CHARACTER':
			return Immutable.Map(action.abilities.map(ability => [ability.name, ability]))
	}
	return state
}

export const createAbility = (name, value) => ({
	name,
	value
})

const ensureAbility = (name, ability = createAbility(name, 0)) => {
	return ability
}