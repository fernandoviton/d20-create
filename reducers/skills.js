import Immutable from 'immutable'

export default (state = Immutable.Map(), action) => {
	switch (action.type) {
		case 'CHANGE_SKILL_RANK':	{
			const oldSkill = ensureSkill(state.get(action.name))
			const newSkill = {...oldSkill, ranks: oldSkill.ranks + action.changeAmount}
			return state.set(action.name, updateTotal(newSkill))
		}
		case 'SET_SKILL_ABILITY_MODIFIER': {
			const oldSkill = ensureSkill(state.get(action.name))
			const newSkill = {...oldSkill, abilityMod: action.modifier}
			return state.set(action.name, updateTotal(newSkill))
		}
	}
	return state
}

export const createSkill = (ranks, abilityMod = 0) => ({
		ranks,
		abilityMod
})

const ensureSkill = (skill = {
		ranks: 0,
		abilityMod: 0,
	}) => {
	return skill
}

const updateTotal = (skill) => {
	const s = {...skill, total: skill.ranks + skill.abilityMod}
	return s
}