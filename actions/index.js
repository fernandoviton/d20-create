export const changeSkillRank = (name, changeAmount) => ({
	type: 'CHANGE_SKILL_RANK',
	name,	changeAmount
})

export const setSkillAbilityModifier = (name, modifier) => ({
	type: 'SET_SKILL_ABILITY_MODIFIER',
	name,	modifier
})

export const changeAbility = (name, changeAmount) => ({
	type: 'CHANGE_ABILITY',
	name,	changeAmount
})

export const loadCharacter = (abilities, skills) => ({
	type: 'LOAD_CHARACTER',
	abilities, skills
})