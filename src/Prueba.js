import React, { Component } from 'react';

class Prueba extends Component {

    constructor(props){
        super(props)
            this.state = {
                tipo: '',
                nombre: '',
                genero: '',
                edad: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('Su mascota es: ' + this.state.tipo + " " + this.state.nombre + " " + this.state.genero + " " + this.state.edad);
        event.preventDefault();
    }

    render(){
        const {nombre} = this.state.nombre
        return (
            <div>
                <h1> Mascotas </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                    Tipo:
                    <select tipo={this.state.tipo} onChange={this.handleChange}>
                        <option tipo = "Perro">Perro</option>
                        <option tipo = "Gato">Gato</option>
                        <option tipo = "Vaca">Vaca</option>
                        <option tipo = "Conejo">Conejo</option>
                    </select>

                    </label>

                    <p>Nombre: <input type='text' name = 'nombre' onChange={this.handleChange}></input></p>
                    <p>Genero: <input type='text'name = 'genero' onChange={this.handleChange}></input></p>
                    <p>Edad: <input type='text' name = 'edad' onChange={this.handleChange}></input></p>
                    <input type='submit' value = 'submit'></input>
                </form>
            </div>
            )
    }
}
  export default Prueba
