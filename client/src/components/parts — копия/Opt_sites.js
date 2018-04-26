import React, { Component } from 'react';
import './opt_sites.css';

class Opt_sites extends Component{
	render(){
		return (
			<div className="col main_part">
				
				<div className="row" id="first_row">	
					<i id="search_icon" className="fas fa-search"></i>
					<input id="search" type="text" placeholder="Search.." />
					<div id="up_button"><a id="top_button" href="">go</a>
					<a id="top_button" href=""><i id="top_save" className="far fa-save"></i>export</a>
					<a id="add_site" href="">Add Site</a>
				</div>
				</div>
				<div className="row" id="filter_part">	
				<a id="add_button" href=""><img id="plus_add" src="image/plus.png" alt="" /><span id="add_text">add filter</span></a>
				<a id="filter_record" href=""><span id="filter_word"></span><span id="or">OR</span></a>
			<a id="band" href="#"><span >AND</span></a>
			</div>
				<ul id="filter_option">
					<li><a className="filter_text" href="">name</a></li>
					<li><a className="filter_text" href="">region</a></li>
					<li><a className="filter_text" href="">state</a></li>
					<li><a className="filter_text" href="">country</a></li>
				</ul>
				
				<div className="row" id="main_choose">	
					
				<div className="info_list" id="number1"><img src="image/columns.png" alt="" /></div>
				<div className="info_list" id="number2"><a href="#">chek</a></div>
				<div className="info_list" id="number3"><a href="#">name</a></div>
				
				<div className="info_list" id="number5"><a href="#">lang</a></div>
				<div className="info_list" id="number6"><a href="#">pub date</a></div>
				
				<div className="info_list" id="number8"><a href="#">social Links</a></div>
				<div className="info_list" id="number9"><a href="#">rss</a></div>
			
				<div id="number10"><a href=""><img src="image/Add.png" alt="" /></a></div>
				</div>
				</div>
															);
	}
}
export default Opt_sites;