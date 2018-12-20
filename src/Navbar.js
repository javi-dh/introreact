import React from 'react';

const Navbar = (props) => {
	console.log(props);
	return(
		<nav>
			<ul>
				{
					props.enlaces.map((enlace, i) => {
						return(
							<li key={i}>
								<a href={enlace.url}> {enlace.txt} </a>
							</li>
						);
					})
				}
			</ul>
		</nav>
	);
}

export default Navbar;