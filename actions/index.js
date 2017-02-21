export const changeSkillRank = (name, changeAmount) => ({
	type: 'CHANGE_SKILL_RANK',
	name,
	changeAmount
})

export const changeAbility = (name, changeAmount) => ({
	type: 'CHANGE_ABILITY',
	name,
	changeAmount
})