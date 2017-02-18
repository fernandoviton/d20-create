import character from '../reducers/character'

export default (state = {}, action) => {
	state.character = character(state.character, action)
	return state
}