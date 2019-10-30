import React from 'react';
import { Paper } from '@material-ui/core';


class Carta extends React.Component {
    render() {
        return (
            <Paper>
                <h4>{this.props.valor}</h4>
            </Paper>
        );
    }
}


export default Carta;