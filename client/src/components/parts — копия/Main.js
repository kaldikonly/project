import React, { Component } from 'react';
import './main.css';

import arr_left from './arr_left.png';
import arrow from './arrow.png';
import logo from './logo1.png';
import back from './back.png';
import scr from './scr.png';
import webscr from './webscr.png';
import techno from './techno.png';
import key from './key.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import arr_btn from './arr_btn.png';
import imgL from './image2.png';	

class Main extends Component{
	render(){
		return (
			<div className="container-fluid me">

<div className="row first_one">
		<div id="scene">
  		<div data-depth="0.5"><img className="back" id="back"src={back} alt="back" /></div>
	</div>
	<div className="up">
		<li id="logo"><img src="logo.png" alt="logo" /></li>
		<li className="text-center" id="enter"><a id="enter_text" href="/news">Bойти в систему</a></li>
		<li className="text-center" id="top_up"><a id="top_text" href="#">Контакты</a></li>
		<li className="text-center" id="top_up"><a id="top_text" href="#">Технологии</a></li>
			<li className="text-center" id="top_up"><a id="top_text" href="#">Источники</a></li>
		   		<li className="text-center" id="top_up"><a id="top_text" href="#">Продукт</a></li>
	</div>

	<div className="down">
		<li id="big_tx" className="text-center">
		<h1 id="big">Держите руку на пульсе новостей и <br />
		общественных настроений</h1>
		</li>
		<li id="sma_tx" className="text-center">
		<h4 id="sma">Система мониторинга и анализа общественного мнения</h4>
		</li>
	</div>

	

</div>
 <div className="row first_half">
 	<div className="col-sm-8 col-sm-push-2" id="block_in">
				<div className="col-sm-4 block_pr1">
					<li id="block_big">+107k</li><br />
					<li id="block_sma">объектов</li>
				</div>
				<div className="col-sm-4 block_pr2">
					<li id="block_big">+573k</li><br />
					<li id="block_sma">событий</li>
				</div>
				<div className="col-sm-4 block_pr3">
					<li id="block_big">+699k</li><br />
					<li id="block_sma">комментариев</li>
				</div>
		</div>
 	<div className="col-md-6 el_fig">

 		<h1 id="sys_h">Система</h1>
 		<article id="sys_a">Общественное мнение это состояние массового сознания,
 		 которое заключает в себе отношение (скрытое или явное)
 		  людей к событиям и фактам социальной действительности и
 		   к деятельности различных групп и отдельных личностей</article>
	<a id="know" href="#third"  ><span id="kn_text">Узнать больше</span>
	 <img id="kn_a" src={arr_btn} alt="arrow" /></a>
 	</div>

 	 	<div className="col-md-6">
 	 	<div>
 	 		<img className="img-responsive" id="hlf_img" src={imgL} alt="img2" />
 	 		</div>
 	 	</div>

 </div>

	<div className="row second">
	
		<div className="col-sm-12 part_img">
			<li id="img_el"><img  src={img1} alt="img1" />
			<h3 id="img_h">Форумы</h3>
			<p id="img_p">ChatROOM, Messaging, Communicate, Discuss, Olinechat, TALK!... >>>
			</p>
			</li>

			<li id="img_el"><img  src={img2} alt="" />
			<h3 id="img_h">Новостные сайты</h3>
			<p id="img_p">Обозреватель, Кореспондент, ЛигаюИНФО, Украинская правда...</p>
			</li>

			<li id="img_el"><img src={img3} alt="" />
			<h3 id="img_h">Социальные сети</h3>
			<p id="img_p">Facebook, YouTube, WECHAT
, QQ, Instagram, QZONE... >>>
					</p></li>

			<li id="img_el el_fi" >
				<h1 id="sys_hy">Источники информации</h1>
 		<article id="sys_a">Система использует бесконечное множество информационных ресурсов.
 		Анализирует сотни страниц в сети.
 		 Постоянно происходит мониторинг и обновление данных без участия человека.
</article>
	<a id="know" href="#third" ><span id="kn_text">Показать все</span>
	 <img id="kn_a" src={arr_btn} alt="arrow" /></a>
	</li></div></div>

			<div className="row third_half">
			<div className="col-sm-12 text-center" id="half_hd" >
			<div id="scene1">
  <div data-depth="0.5"><img  id="back3"src={back} alt="back" /></div>
	</div>
  
   <img id="build"src={key} alt="back" />

			 <h1>Технологии</h1> </div> 
			<div className="col-sm-12 text-center " id="slider">
				<div className=" " id="thlaf1">
					<img src={webscr} alt="slider_picture" />
			</div> 
				<div className=" " id="thlaf2">
					<img src={techno} alt="slider_picture" />
			</div> 
				<div className="c" id="thlaf3">
					<img src={scr} alt="slider_picture" />
			</div> 
			</div> 

				<div className="col-sm-12 text-center" id="slid_cnt" >
				<a href="#" ><img id="arr_"src={arr_left}  /></a>
				<a href="#" ><img id="arr_"src={arrow}  /></a>
			</div>
			</div>

		<div className="row third text-center" >
				<a href="#" name="third" ></a>
			<li id="th_1" > <h1 >Получить демо версию</h1> </li>
			<li id="th_2" ><span>Нам бы хотелось услышать о проблеме,
			 которую вы хотите решить</span><br />
			 <span id="par2"> и показать вам, как мы можем помочь</span></li>
			<li id="th_3" >
			<input type="text" placeholder="*Имя" />
			<input type="text" placeholder="*Фамилия" />
			</li>
			<li id="th_4" >
				<input type="text" placeholder="*Почтовый Ящик" />
			<input type="text" placeholder="*Название компании" />
			</li>
			<li id="th_5">
				<input type="text" placeholder="*Какова ваша должность?" />
			
			</li>
			<li id="th_6">
				<input type="text" placeholder="*Как мы можем вам помочь?" />
			</li>
			<li id="th_7">
				<span>* Обязательое поле</span>
			</li>
			<li id="th_8">
				<a id="send" href="#" >отправить</a>
			</li>
		

		</div>
		<div className="row footer">
		<div className="col-sm-3 text-center foot_part">
			<div id="foot_img">
			<img src={logo} />
			</div>
		</div>
		<div className="col-sm-3 foot_part">
				<li className="foot_text"><i className="far fa-copyright"></i>2018</li>
			<li className="foot_text"><span id="foot_sp">Институт Системных Исследований и</span></li>
			 <li className="foot_text"><span >Информационных Технологий</span></li>
		</div>
		<div className="col-sm-3 foot_part">
			<li className="foot_text"><span>Украина, Киев</span></li>
			<li className="foot_text"><span>Брест-Литовское шоссе 7-Б,</span></li>
			<li className="foot_text"><span>03179</span></li>
		</div>
		<div className="col-sm-3 foot_part">
			<li className="foot_text"><a href="mailto:info@isait.com.ua" >Email: info@isait.com.ua</a></li>
				<li className="foot_text"><a href="TEL:+380442290440">+38 044 229 04 40</a></li>
		</div>
	</div>
</div>

			);
	}
}
export default Main;