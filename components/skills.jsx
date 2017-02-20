import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table'
import Skill from './skill.jsx'
import Immutible from 'Immutable'
import { changeSkillRank } from '../actions/index'

export default class Skills extends React.Component {
    render() {
        const { store } = this.context;
        const skill = store.getState().character.skills.get('balance');
        const ranks = skill === undefined ? 0 : skill.ranks
        const skill1 = {skillName:'Balance', crossClass:null, total:5, ranks:ranks};
        const skill2 = {skillName:'Bluff', crossClass:4, total:null, ranks:8};


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
                    <Skill value={skill1}/>
                    <Skill value={skill2}/>
                </tbody>
            </Table>
        </div>
    }
}
Skills.contextTypes = {
  store: React.PropTypes.object
}