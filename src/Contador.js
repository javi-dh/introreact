import React, { Component } from 'react';

class Contador extends Component {
	constructor(props){
		super(props);
		this.state = {
			conteo: this.props.valorInicial,
		}
	}

	aumentar = () => {
		let { conteo } = this.state;
		this.setState({
			conteo: conteo + this.props.cantAum,
		});
	}

	disminuir = () => {
		let { conteo } = this.state;
		if (conteo > 0) {
			this.setState({
				conteo: conteo - this.props.cantDec,
			});
		}
	}

	render(){
		let { conteo } = this.state;
		return(
			<div>
				<h3> {conteo} </h3>
				<button onClick={this.aumentar}>Aumentar</button>
				<button onClick={this.disminuir}>Disminuir</button>
			</div>
		)
	}
}

export default Contador;