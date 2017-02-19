export const increaseBalanceSkill = () => ({
	type: 'INCREASE_BALANCE_SKILL',
})

export const changeSkillRank = (name, changeAmount) => ({
	type: 'CHANGE_SKILL_RANK',
	name,
	changeAmount
})
