import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well'

export default class Abilities extends React.Component {
    render() {
        const { store } = this.context;

        return <div>
            <Button bsStyle="primary" className='skillbutton' onClick={() => alert('clicked button')}>Abilities Button</Button>

            <div>STR</div>
            <div>DEX</div>
        </div>
    }
}
Abilities.contextTypes = {
  store: React.PropTypes.object
}