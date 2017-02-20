import React from 'react'
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button';
import { changeSkillRank } from '../actions/index'

export default class Skill extends React.Component {
    render() {
        const { store } = this.context;

        return <tr>
            <td>{this.props.value.skillName}</td>
            <td>{this.props.value.crossClass}</td>
            <td>{this.props.value.total}</td>
            <td>{this.props.value.ranks}</td>
            <td>
                <Button bsStyle="primary" bsSize="xsmall" onClick={() => store.dispatch(changeSkillRank(this.props.value.skillName, 1))}>+</Button>
                <Button bsStyle="primary" bsSize="xsmall" style={{marginLeft: 5}} onClick={() => store.dispatch(changeSkillRank(this.props.value.skillName, -1))}>-</Button>
            </td>
        </tr>
    }
}
Skill.contextTypes = {
  store: React.PropTypes.object
}