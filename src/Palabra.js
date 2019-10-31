import React from 'react';
import Letra from './Letra'


class Palabra extends React.Component {

    estaEnVisibles(letra){
        var visibles = this.props.visibles;

        if(!visibles) return false;
        var estaEnVisibles = visibles.includes(letra);

        return estaEnVisibles;
    }
    
    generarLetras(){
        var palabra = this.props.palabra;
        var letras = [];
        
        for (var i = 0; i < palabra.length; i++) {
            var letra = palabra.charAt(i);
            letras.push(
                <Letra 
                    letra={letra} 
                    estaVisible={this.estaEnVisibles(letra)}>
                </Letra>
            );
        }

        return letras;
    }
    
    render() {
        return (
            <div>
                {this.generarLetras()}
            </div>
        );
    }
}


export default Palabra;