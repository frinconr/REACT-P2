import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArregloDeCartas from './ArregloDeCartas'


class Ahorcado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {
                intento: ''
            },
            intentos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;

      this.setState({
        fields
      });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        var intentos = this.state.intentos;
        intentos.push(this.state.fields.intento);

        this.setState({
            intentos
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="intento"
                        name="intento"
                        label="Letra"
                        value={this.state.fields.intento}
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Adivinar
                    </Button>
                </form>
                <ArregloDeCartas valoresDeCartas={this.state.intentos}></ArregloDeCartas>
            </div>

        );
    }
}



export default Ahorcado;
