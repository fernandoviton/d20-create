import React from 'react'
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button';
import { changeSkillRank } from '../actions/index'

export default class Skill extends React.Component {
    render() {
        const { store } = this.context;

        return <tr>
            <td><Button bsStyle="primary" className='skillbutton' onClick={() => store.dispatch(changeSkillRank(this.props.value.skillName, 1))}>+</Button>
            </td>
            <td>{this.props.value.skillName}</td>
            <td>{this.props.value.crossClass}</td>
            <td>{this.props.value.total}</td>
            <td>{this.props.value.ranks}</td>
        </tr>
    }
}
Skill.contextTypes = {
  store: React.PropTypes.object
}