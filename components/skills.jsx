import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table'
import Immutible from 'Immutable'
import { changeSkillRank } from '../actions/index'

export default class Skills extends React.Component {
	render() {
		const { store } = this.context;
		const skillElements = store.getState().character.skills.map((skill, skillName) => {
			return skillRowElement(store, skillName, skill)
		}).toArray()

		return <div>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>Skill Name</th>
						<th>Total</th>
						<th>Ranks</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{skillElements}
				</tbody>
			</Table>
		</div>
	}
}
Skills.contextTypes = {
	store: React.PropTypes.object
}

const skillRowElement = (store, skillName, skill) => <tr key={skillName}>
	<td>{skillName}</td>
	<td>{skill.total}</td>
	<td>{skill.ranks}</td>
	<td>
		<Button bsStyle="info" bsSize="xsmall" onClick={() => store.dispatch(changeSkillRank(skillName, 1))}>+</Button>
		<Button bsStyle="info" bsSize="xsmall" style={{ marginLeft: 5 }} onClick={() => store.dispatch(changeSkillRank(skillName, -1))}>-</Button>
	</td>
</tr>