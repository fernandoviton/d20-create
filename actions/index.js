export const changeSkillRank = (name, changeAmount) => ({
	type: 'CHANGE_SKILL_RANK',
	name,	changeAmount
})

export const initSkill = (name, abilityModifierName, ranks) => ({
	type: 'INIT_SKILL',
	name,	abilityModifierName, ranks
})

export const changeAbility = (name, changeAmount) => ({
	type: 'CHANGE_ABILITY',
	name,	changeAmount
})

export const loadCharacter = (abilities, skills) => ({
	type: 'LOAD_CHARACTER',
	abilities, skills
})