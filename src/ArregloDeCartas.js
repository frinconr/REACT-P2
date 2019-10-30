import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carta from './Carta';


class ArregloDeCartas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartas: []
        };

        this.actualizarCartas = this.actualizarCartas.bind(this);
    }

    actualizarCartas(){
        var cartas = this.props.valoresDeCartas.map((v,i) => {
            return(
                <Grid key={i} item xs={3}>
                    <Carta valor={v}/>
                </Grid>
            );
        });

        return cartas;
    }

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {this.actualizarCartas()}
                </Grid>
            </div>
        );
    }
}


export default ArregloDeCartas;