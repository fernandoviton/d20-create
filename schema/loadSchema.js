import Immutable from 'immutable'

import abilities from './abilities.json'
import skills from './skills.json'
import { changeAbility, initSkill } from '../actions/index'

export default (store) => {
	loadAbilities(store)
	loadSkills(store)
}

const loadAbilities = (store) => {
	var abilitiesMap = Immutable.fromJS(abilities)
	abilitiesMap.map( (v, k) => store.dispatch(changeAbility(k, 0)) )
}

const loadSkills = (store) => {
	var skillsMap = Immutable.fromJS(skills)
	skillsMap.map( (v, k) => { console.log("Ability: ", v.get('ability')); store.dispatch(initSkill(k, v.get('ability'), 0))})
}