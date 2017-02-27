import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table'
import Immutible from 'Immutable'
import { changeAbility } from '../actions/index'

export default class Abilities extends React.Component {
	render() {
		const { store } = this.context;
		const rows = store.getState().character.abilities.map((ability, abilityName) => {
			return rowElement(store, abilityName, ability)
		}).toArray()

		return <div>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>Ability Name</th>
						<th>Value</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</Table>
		</div>
	}
}
Abilities.contextTypes = {
	store: React.PropTypes.object
}

const rowElement = (store, abilityName, ability) => <tr key={abilityName}>
	<td>{abilityName}</td>
	<td>{ability.value}</td>
	<td>
		<Button bsStyle="info" bsSize="xsmall" onClick={() => store.dispatch(changeAbility(abilityName, 1))}>+</Button>
		<Button bsStyle="info" bsSize="xsmall" style={{ marginLeft: 5 }} onClick={() => store.dispatch(changeAbility(abilityName, -1))}>-</Button>
	</td>
</tr>