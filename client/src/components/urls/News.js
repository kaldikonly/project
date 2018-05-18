import React, { Component } from 'react';
import './news.css';
import smile from './smile.png';
import next from './next.png';
import img2 from './img2.png';
import Moment from 'react-moment';
import 'moment/locale/ru';
import ImageLoader from 'react-image-file';

class News extends Component {
  constructor(){
    super();
    this.state = {
      f_news: []
  }
}

  componentDidMount(){
    fetch('/getnews')
    .then( res => res.json() )
    .then( f_news => this.setState( {f_news}, () => console.log('News fetched..', f_news)));
   }

   function 
  render() {

    return (
<<<<<<< HEAD
<<<<<<< HEAD


      <div className="col main_state">
          <div className="nav_news">
              <div className="flex_nav_news">
                  <div className="left_block">
                      <button type="button" className="blue_btn btn-primary update_news">25</button>
                      <button  type="button" className="blue_btn go_to_analytics">Аналитика</button>
                  </div>
                  <div className="right_block"></div>
              </div>

          </div>
=======
    				
    			
      <div className="col-sm-8  main_state">
>>>>>>> parent of da298f0... Работа над структурой html и css
=======
    				
    			
      <div className="col-sm-8  main_state">
>>>>>>> parent of da298f0... Работа над структурой html и css
      	<div className="reason1 ">
			<a id="redo"><i className="fas fa-redo-alt"></i><span>25</span></a>
									<i id="n_icon" className="fas fa-list"></i>
									<i id="n_icon" className="fas fa-angle-right"></i>
									<i id="n_icon" className="fas fa-angle-left"t></i>
									<span id="page_m">1-50 из 25 000</span>
				</div>
       { this.state.f_news.map(f_news =>
              <div className="reason">
       											<li>
											<span id="rec_name">{f_news.f_Category}</span>
											<span id="rec_time"><Moment  locale="ru" format="Do MMM YYYY h:mm">{f_news.f_PublicationDate}</Moment> (<Moment locale="ru" fromNow>{f_news.f_PublicationDate}</Moment>)</span>

									<fieldset className="rating" id="rate">
									  <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 "></label>
    <input type="radio" id="star4" name="rating" value="4" checked="true" /><label className = "full" for="star4" title="Pretty good - 4 "></label>
    <input type="radio" id="star3" name="rating" value="3" checked="true"/><label className = "full" for="star3" title="Meh - 3 "></label>
    <input type="radio" id="star2" name="rating" value="2" checked="true"/><label className = "full" for="star2" title="Kinda bad - 2 "></label>
    <input type="radio" id="star1" name="rating" value="1" checked="true" /><label className = "full" for="star1" title="1"></label>
    </fieldset>
    	<span id="rec_rating" >7.6</span>
    </li>
    				<li id="rec_li">
    					
						<img id="rec_img" src={img2} alt="first" />
						<h2 id="rec_hd">{f_news.f_Title.split(" ",8).join(" ")}</h2>
						<p id="rec_text">{f_news.f_Fulltext.slice(0, 225)}
						<a id="rec_all" href="#">
						...далее</a></p>
						<a id="rec_opn" href="#">
					<i id="rec_icn" className="fas fa-angle-down"></i></a>

				  </li>
					 <ul>
			<li id="left_dw">
			<a id="next" target="_blank" href={f_news.f_LinkToNews}>
			<img src={next} alt="arrow best" /></a></li>
			<li id="read"><a  target="_blank" href={f_news.f_LinkToNews}>читать</a></li>
			<li id="more"><a  href="#">подробнее</a></li>
			<li id="smile" ><img id="smile_a" src={smile} alt="first" /></li>
			</ul>
								
				</div>
	)}
        </div>

   

      




    );
  }
}

export default News;
