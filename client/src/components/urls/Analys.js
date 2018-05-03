import React, { Component } from 'react';
import './analys.css';
import option from './option.png';
import back from './back1.png';
import back2 from './back2_.png';
import back3 from './back3_.png';
import arrow from './arrow.png';
import bad from './icons/bad.png';
import good from './icons/happy.png';
import norm from './icons/norm.png';
import left from './icons/left.png';
import right from './icons/right.png';

class Analys extends Component{
	render(){
		return (
					<div className="col-sm-10 analys" >
			
						<div className="col-sm-12 a_head" >
								  <div className="head_a">
  		<li id="head_p"> <a id="a_op" href="#">общее</a></li>  
  		<li id="head_p"> <a id="a_op" href="#">источники</a></li>
  		<li id="head_p"> <a id="a_op" href="#">тоальность</a></li>
  		<li id="head_p"> <a id="a_op" href="#">источники</a></li>
  		<li id="head_p"> <a id="a_op" href="#">активность</a></li>
  </div>
						</div>
								
								
							<div className="col-sm-10 a_block" id="a_block">
							 <div className="block_head">
										<li id="head_q"> <a id="a_q" href="#">Количество сообщений</a></li>  
  									<li id="head_tho"> <a id="a_tho" href="#">(тысячи)</a></li>
  									<li id="head_line"> <a id="a_line" href="#">Сглаживающая линия</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">час</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">день</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">неделя</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">месяц</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">квартал</a></li>
  									<li id="head_b"> <a id="a_bl" href="#">год</a></li>
  								<li id="head_op">	< img id="option" src={option}  alt="option"/></li>
											
											
									</div>
								</div>

									<div className="col-sm-2 d_block" >
							 <div className="d_head">
							 <a id="d_ha" href="#">Список важных слов</a>
							 < img id="d_arrow" src={arrow}  alt="arrow"/>
							 </div>
							  <div className="d_head2">
							  <li className="text-center" id="a0"> <a id="a0a" href="#">a2</a></li>  
									<li className="text-center" id="a1"> <a id="a1a" href="#">A1</a></li>  
									<li className="text-center" id="a2"> <a id="a2a" href="#">A2</a></li>
  									<li className="text-center" id="a3"> <a id="a3a" href="#">A3</a></li>
  									</div>
  									  <div className="d_main">
  									  <li className="main_h" id="a1"> <a id="h_a" href="#">новые</a></li>  
  									
  									<div className="words_1">

									<li className="hd_wor" >Морковь</li>  
									<li ><span className="half_g">55</span></li>
  									<li ><span className="half_g">86</span></li>
  									<li ><span className="blac" >92</span></li>
  										
  									</div>
  									<div className="words_2">

									<li className="hd_wor" >Война</li>  
									<li ><span className="half_g">58</span></li>
  									<li ><span className="half_g">62</span></li>
  									<li ><span className="blac">88</span></li>
  										
  									</div>
  										<div className="words_3">

									<li className="hd_wor" >Мир</li>  
									<li ><span className="half_g">67</span></li>
  									<li  ><span className="half_g">54</span></li>
  									<li ><span className="blac">85</span></li>
  										
  									</div>
  										<div className="words_4">

									<li className="hd_wor" >Таблицы</li>  
									<li ><span className="half_g">68</span></li>
  									<li ><span className="half_g">74</span></li>
  									<li ><span className="blac">80</span></li>
  										
  									</div>
  										
										</div>

										 <div className="d_main2">
  									 
  									<li className="main_h2" id="a1"> <a id="h_a" href="#">Старые</a></li>  

  									<div className="words_1">

									<li className="hd_wor" >Морковь</li>  
									<li ><span className="half_g">55</span></li>
  									<li ><span className="half_g">86</span></li>
  									<li ><span className="blac" >92</span></li>
  										
  									</div>
  									<div className="words_2">

									<li className="hd_wor" >Война</li>  
									<li ><span className="half_g">58</span></li>
  									<li ><span className="half_g">62</span></li>
  									<li ><span className="blac">88</span></li>
  										
  									</div>
  										<div className="words_3">

									<li className="hd_wor" >Мир</li>  
									<li ><span className="half_g">67</span></li>
  									<li  ><span className="half_g">54</span></li>
  									<li ><span className="blac">85</span></li>
  										
  									</div>
  										<div className="words_4">

									<li className="hd_wor" >Таблицы</li>  
									<li ><span className="half_g">68</span></li>
  									<li ><span className="half_g">74</span></li>
  									<li ><span className="blac">80</span></li>
  										
  									</div>
  										
										</div>


										 <div className="d_main3">
  									 
  									<li className="main_h3" id="a1"> <a id="h_a" href="#">Ушедшие</a></li>  

  									<div className="words_1">

									<li className="hd_wor" >Морковь</li>  
									<li ><span className="half_g">55</span></li>
  									<li ><span className="half_g">86</span></li>
  									<li ><span className="blac" >92</span></li>
  										
  									</div>
  									<div className="words_2">

									<li className="hd_wor" >Война</li>  
									<li ><span className="half_g">58</span></li>
  									<li ><span className="half_g">62</span></li>
  									<li ><span className="blac">88</span></li>
  										
  									</div>
  										<div className="words_3">

									<li className="hd_wor" >Мир</li>  
									<li ><span className="half_g">67</span></li>
  									<li  ><span className="half_g">54</span></li>
  									<li ><span className="blac">85</span></li>
  										
  									</div>
  										<div className="words_4">

									<li className="hd_wor" >Таблицы</li>  
									<li ><span className="half_g">68</span></li>
  									<li ><span className="half_g">74</span></li>
  									<li ><span className="blac">80</span></li>
  										
  									</div>
  										
										</div>


  									</div>
											
								<div className="col-sm-10 b_block" >
							 <div className="b_head">
							 < img id="arrow" src={arrow}  alt="arrow"/>
									<li id="b_hd"> <a id="b_ha" href="#">Движение важных слов</a></li>  
  									<li id="b_gone"> <a id="b_gone_a" href="#">ушедшие</a></li>
  									<li id="b_old"> <a id="b_old_a" href="#">старые</a></li>
  									<li id="b_new"> <a id="b_new_a" href="#">новые</a></li>
  									<li id="b_ment"> <a id="b_mena" href="#">упоминаний: <span id="men_sp">25 689</span></a></li>
  											
											< img id="back_2" src={back2}  alt="back2"/>
									</div>
								</div>

								<div className="col-sm-2 g_block" >
									<li id="g_hd"> <a id="g_ha" href="#">Список зависимых слов</a></li>  
									<div className="words_me1">

									<li >Таблицы</li>  
									<li ><span className="half_g">20 657</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Волки</li>  
									<li ><span className="half_g">19 738</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Сани</li>  
									<li ><span className="half_g">17 634</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Люди</li>  
									<li ><span className="half_g">16 148</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Песни</li>  
									<li ><span className="half_g">13 468</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Другие</li>  
									<li ><span className="half_g">12 468</span></li>
  								
  										
  									</div>
  									<div className="words_me">

									<li >Разные</li>  
									<li ><span className="half_g">12 068</span></li>
  								
  										
  									</div>


								</div>
									<div className="col-sm-10 c_block" >
							 <div className="c_head">
							 < img id="c_arrow" src={arrow}  alt="arrow"/>
									<li id="с_hd"> <a id="c_ha" href="#">геоданные</a></li>  
									<li id="с_man"> <a id="с_man_a" href="#">Основной график</a></li>
  									<li id="с_imp"> <a id="с_imp_a" href="#">Важные слова</a></li>
  									< img id="back_3" src={back3}  alt="back3"/>
									</div>
								</div>

							<div className="col-sm-10 f_block" >
							 <div className="f_head">
										<li id="f_one"> <a id="f_oa" href="#">Рейтинг важных слов по регионам</a></li> 
											<table id="f_table">
  <tr >
   <th id="white_">+</th>
    <th>регион</th>
    <th>упоминаний</th>
     <th>площадок</th>
       <th>площадок</th>
    	  <th>тональность</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Киевская обл </td>
    <td>10 668</td>
      <td>10 668</td>
        <td>10 668</td>
          <td><img id="good" src={good} alt="smile"/></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="good" src={good} alt="smile"/></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="norm" src={norm} alt="smile"/></td>
  </tr>
  <tr>
     <td>4</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="bad" src={bad} alt="smile"/></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="good" src={good} alt="smile"/></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="good" src={good} alt="smile"/></td>
  </tr>
   <tr>
    <td>7</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="norm" src={norm} alt="smile"/></td>
  </tr>
   <tr>
    <td>8</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="bad" src={bad} alt="smile"/></td>
  </tr>
   <tr>
    <td>9</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="good" src={good} alt="smile"/></td>
  </tr>
   <tr>
    <td>10</td>
    <td>Житомерская обл</td>
    <td>9 668</td>
     <td>2 248</td>
      <td>2 248</td>
 <td><img id="good" src={good} alt="smile"/></td>
  </tr>
</table>

	</div>

		 <div className="f_foot">
              < img id="i_right" src={right}  alt="right"/>
  									< img id="i_left" src={left}  alt="left"/>
                      
                    <li id="с_hda"> <a id="с_had" href="#">Строк на странице</a></li>  
                      

		 </div>						
</div>
						</div>

						);
	}
}
export default Analys;