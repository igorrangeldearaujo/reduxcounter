import React from 'react'
import PropTypes from 'prop-types'

/* class Ola extends Component{
    render(){
        return <span>Ola {this.props.nome} </span>
    }
} */

const Ola = ({ nome }) => {
    return <span> Ola {nome} </span>
}

Ola.propTypes = {
    nome: PropTypes.string.isRequired
}

Ola.defaultProps ={
    nome: 'Zé ninguém'
}
export default Ola

