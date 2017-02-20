import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table'
import Skill from './skill.jsx'
import Immutible from 'Immutable'
import { changeSkillRank } from '../actions/index'

export default class Skills extends React.Component {
    render() {
        const { store } = this.context;
        const skillElements = store.getState().character.skills.map((skill, skillName) => {
            return <Skill key={skillName} value={{skillName: skillName, crossClass:null, total: 0, ranks:skill.ranks }}/>
        }).toArray()

        return <div>
            <Button bsStyle="primary" className='skillbutton' onClick={() => store.dispatch(changeSkillRank('balance', 1))}>Skill Button</Button>

            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Skill Name</th>
                    <th>Cross Class</th>
                    <th>Total</th>
                    <th>Ranks</th>
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