import React from 'react'
import { Button } from 'react-bootstrap';
import Menu from '../Components/Menu';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Entrar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div style={wellStyles} className="well">
                <p>
                    <Button bsStyle="link" onClick={() => Menu} > ENTRAR </Button>
                </p>
            </div>
        )

    }
}

export default Entrar