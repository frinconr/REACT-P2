import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArregloDeCartas from './ArregloDeCartas'
import Palabra from './Palabra'

const ahorcado0 = require('./media/Ahorcado-0.png');
const ahorcado1 = require('./media/Ahorcado-1.png');
const ahorcado2 = require('./media/Ahorcado-2.png');
const ahorcado3 = require('./media/Ahorcado-3.png');
const ahorcado4 = require('./media/Ahorcado-4.png');
const ahorcado5 = require('./media/Ahorcado-5.png');
const ahorcado6 = require('./media/Ahorcado-6.png');

class Ahorcado extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {
                intento: ''
            },
            intentos: [],
            cantidadDeIntentosRestantes: 5,
            palabra: 'palabra',
            imagenesAhorcado: [
                ahorcado0,
                ahorcado1,
                ahorcado2,
                ahorcado3,
                ahorcado4,
                ahorcado5,
                ahorcado6
            ],
            indiceImagenAhorcado: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.esAcierto = this.esAcierto.bind(this);
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
        var intento = this.state.fields.intento;
        intentos.push(intento);

        if(!this.esAcierto(intento)){
            var intentosRestantes =  this.state.cantidadDeIntentosRestantes;
            intentosRestantes--;

            var indice = this.state.indiceImagenAhorcado;
            indice++

            this.setState({
                cantidadDeIntentosRestantes: intentosRestantes,
                indiceImagenAhorcado: indice
            });           
        }

        this.setState({
            fields: {
                intento:''
            },
            intentos: intentos
        });
    }

    esAcierto(letra){
        var esAcierto = this.state.palabra.includes(letra);
        return esAcierto;
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
                <h4>Intentos restantes: <span>{this.state.cantidadDeIntentosRestantes}</span></h4>
                <Palabra palabra={this.state.palabra} visibles={this.state.intentos}></Palabra>
                <ArregloDeCartas valoresDeCartas={this.state.intentos}></ArregloDeCartas>
                <img 
                    src={this.state.imagenesAhorcado[this.state.indiceImagenAhorcado]} 
                    alt="Ahorcado" 
                    width="500" 
                    height="600">   
                </img>
            </div>

        );
    }
}



export default Ahorcado;
