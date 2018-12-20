import React from 'react';

let css = {
	color: 'red',
	fontWeight: 'normal',
}

const Saludo = (props) => {
	console.log(props);
	return (
		<div>
			<h2 style={css}> {props.txt} </h2>
			<p> {props.paragraph ? props.paragraph : 'No hay texto'} </p>
		</div>
	);
}

export default Saludo;