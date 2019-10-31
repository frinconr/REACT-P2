import React from 'react';


class Letra extends React.Component {

    render() {
        var texto = this.props.estaVisible ? this.props.letra:'-';
        return (<span>{texto}</span>);
    }
}


export default Letra;