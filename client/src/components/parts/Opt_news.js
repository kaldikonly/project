import React, { Component } from 'react';
import './opt_news.css';
import axios from 'axios';
import Stringify from 'react-stringify';

class Opt_news extends Component{

	constructor(){
	super();
	this.state ={
		seti :'false',
		mySearch : ' '
		}
}

handleSetiChange = (e) => {
	
	this.setState({
		seti : e.target.checked,
		mySearch : e.target.value
	})
	console.log(this.state.mySearch)
}



handleClick = (e) =>{

	const arr ={
		name: this.state.mySearch
	}
	axios
	.post('/students', { arr : JSON.stringify()})
	.then(res => {
		console.log(res);
		console.log(res.data);
		alert('YEEEESSSS');
	})
	

}




	render(){
		return (
			<div className="col news_part" >
				<div  id="first_row">
					<i id="search_icon" className="fas fa-search"></i>
					<input id="newssearch" value={this.state.mySearch} onChange={this.handleSetiChange} type="text" placeholder="Поиск..." />
					<input type="text" id="daterange" value="01/01/2015 - 01/31/2015" />
					<button type="button" id="n_search" onClick={this.handleClick} >поиск</button>
				</div>

				<div id="filter_table">
					<li className="text-center"><h4 id="fil_cho">выберите фильтр</h4></li>

						<li ><label className="containeree">По тональности
							 <input id="tone_r" type="checkbox" />
							<span className="checkmark"></span>
							</label>
						</li>

						<li >
							<label className="containeree">По источникам
 							 	<input id="where_r" type="checkbox" />
								<span className="checkmark"> </span>
							</label>
						</li>

							<li ><label className="containeree">По авторам
  									<input id="author_r" type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>

							<li id="opt" className="text-center"><a id="den" href="#">отмена</a>
								<a id="conf" href="#">ок</a></li>

						</div>

						<div className="row wow" id="fil_row">
						<a id="clear_all" href="#">очистить все</a>
						<a id="fil_add" href="#">Добавить фильтр</a>
						<a id="tone_f" href="#">тональность</a>
						<a id="who_f" href="#">источники</a>
						<a id="author_f" href="#">авторы</a>

				<div id="tone_op">	
							<li className="text-center"><h4 id="fil_cho">выберите тональность</h4></li>
							<li className="rainee"><label className="containeree">негативная
 								 <input id="tone_r" type="checkbox" />
  								<span className="checkmark"></span>
								</label>
							</li>

							<li className="rainee">
							<label className="containeree">позитивная
 							 <input id="where_r" type="checkbox" />
  							<span className="checkmark">
  							</span>
							</label></li>

							<li className="rainee"><label className="containeree">нейтральная
  									<input id="author_r" type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>

								<li className="rainee"><label className="containeree">неоеределено
  									<input id="author_r" type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
						</div>

						<div id="who_option">
							<h3 id="who_hd">выберите категорию</h3>
							<li ><label id="who_1" className="containeree">социальные сети
 								 <input  type="checkbox" />
  								<span className="checkmark"></span>
								</label>
							</li>
							<li >
							<label id="who_1" className="containeree">сми
 							 <input  type="checkbox" />
  							<span className="checkmark">
  							</span>
							</label></li>
							<li ><label id="who_1" className="containeree">блоги
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
								<li ><label id="who_1" className="containeree">неопределено
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
									<li ><label id="who_1" className="containeree">форумы
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
							<h3 id="who_hd">выберите источники</h3>
							<i id="who_ic" className="fas fa-search"></i>
								<input id="who_srch" type="text" placeholder="Search" />
								<br />
							<li ><label id="who_" className="containeree">vk.com
 								 <input  type="checkbox" />
  								<span className="checkmark"></span>
								</label>
							</li>
							<li >
							<label id="who_" className="containeree">facebook
 							 <input  type="checkbox" />
  							<span className="checkmark">
  							</span>
							</label></li>
							<li ><label id="who_" className="containeree">twitter
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
								<li ><label id="who_" className="containeree">instagram
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
									<li ><label id="who_" className="containeree">google+
  									<input  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>

						</div>
						</div>
						</div>
												);
	}
}
export default Opt_news;