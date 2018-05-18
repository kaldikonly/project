import React, { Component } from 'react';
import './opt_news.css';


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

handleSubmit = (e) => {
	e.preventDefault();
	
}




	render(){

		return (
			<div className="col-sm-10 news_part" >
				<div  id="first_row">	
					<i id="search_icon" className="fas fa-search"></i>
					<input id="search" value={this.state.mySearch} onChange={this.handleSetiChange} type="text" placeholder="Search.." />
							
							<input type="text"  id="daterange" value="01/01/2015 - 01/31/2015" />
							<a id="n_search"   href="#">поиск</a>
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
  							<span className="checkmark">
  							</span>
							</label></li>

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
 								 <input ref="soc_seti" value={this.state.seti} onChange={this.handleSetiChange}  type="checkbox" />
  								<span className="checkmark"></span>
								</label>
							</li>
							<li >
							<label id="who_1" className="containeree">сми
 							 <input id="smi" type="checkbox" />
  							<span className="checkmark">
  							</span>
							</label></li>
							<li ><label id="who_1" className="containeree">блоги
  									<input id="blog"  type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
								<li ><label id="who_1" className="containeree">неопределено
  									<input id="undef" type="checkbox" />
  									<span className="checkmark">
  							</span>
								</label></li>
									<li ><label id="who_1" className="containeree">форумы
  									<input id="forum" type="checkbox" />
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