import Immutable from 'immutable'

export default (state = Immutable.Map(), action, props) => {
	switch (action.type) {
		case 'CHANGE_SKILL_RANK':	{
			const oldSkill = ensureSkill(state.get(action.name))
			const newSkill = {...oldSkill, ranks: oldSkill.ranks + action.changeAmount}
			return state.set(action.name, updateSkill(newSkill, props.abilities))
		}
		case 'INIT_SKILL': {
			const newSkill = createSkill(action.ranks, action.abilityModifierName)
			return state.set(action.name, updateSkill(newSkill, props.abilities))
		}
	}
	return state
}

export const createSkill = (ranks, abilityName = '', abilityMod ) => ({
		ranks,
		abilityName,
		abilityMod: 0,
		total: 0
})

const ensureSkill = (skill = {
		ranks: 0,
		total: 0
	}) => {
	return skill
}

const updateSkill = (skill, abilities) => {
	const abilityName = skill.abilityName !== undefined ? abilities.get(skill.abilityName) : undefined;
	const abilityModifier = abilityName !== undefined ? abilityName.value : 0;
	return {...skill, abilityMod: abilityModifier, total: skill.ranks + abilityModifier}
}