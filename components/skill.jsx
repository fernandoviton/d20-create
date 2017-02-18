import React from 'react'
import Table from 'react-bootstrap/lib/Table'

export default class Skill extends React.Component {
    render() {
        const { store } = this.context;

        return <tr>
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