import React, { Component } from 'react';
import './left.css';
import globe from './globe.png';
import wifi from './wifi.png';
import disk from './disk.png';
import graph from './graph.png';
import logo from './logo1.png';

class Left extends Component{
	render(){
		return (
			<div className="container menu" id="menus">
			<div id="first_block">	
			<a id="name_a" href="/" ><img src={logo} className="logo"  /></a>
			</div>
				<div id="main_menu">
					<ul id="category_list">
					<li><a id="category" href="/search" >
						<img src={globe} className="icon_menu"  />
						<span className="text_menu">Таблица сайтов</span></a></li>

						<li><a id="category" href="/news">
							<img className="icon_menu" src={wifi} />
							<span className="text_menu">Новости</span></a></li>

						<li><a id="category" href="/analys">
							<img className="icon_menu" src={disk} />
							<span className="text_menu">Аналитика</span>
						</a></li>
						<li><a id="category" href="/soon">
							<img className="icon_menu" src={graph} />
							<span className="text_menu">Отчет</span>
						</a></li>
							<li><a id="category" target="_blank" href="https://search-momproject-yrhnxkfn3zfeumvy35cjskfxea.us-east-2.es.amazonaws.com/_plugin/kibana/">
						<i className="fab fa-kickstarter-k fa-2x icon_menu"></i>
							<span className="text_menu">kibana</span>
						</a></li>
					</ul>
	
				</div>
				<div id="menu_bot">
					<div id="set"><a id="category" href=""><i className="fas fa-cog fa-2x icons_menu"></i><span className="texts_menu">настройки</span></a></div>
					<div id="icon_hide"><a id="menu_hide" href="#"><i id="button_hide" className="fas fa-angle-left">
						</i></a>
					<a id="menu_show" href="#"><i id="button_show" className="fas fa-angle-right"></i></a></div>
				</div>
			</div>

			);
	}
}
export default Left;