import React, { Component } from 'react';
import './soon.css';

import logo from './logo1.png';

class Soon extends Component{
	render(){
		return (
				<div className="col-sm-12 text-center" id="soon">
					<img src={logo} alt="logo" id="soon_logo"  />
						<h1 id="soon_hd">Страничка в разработке.</h1>
				</div>

							);
	}
}
export default Soon;