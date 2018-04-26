import React, { Component } from 'react';
import './sites.css';
import Moment from 'react-moment';
import 'moment/locale/ru';

class Sites extends Component {
  constructor(){
    super();
    this.state = {
      news: []
  }

  }
  componentDidMount(){
    fetch('/getpost')
    
    .then( res => res.json() )
    .then( news => this.setState( {news}, () => console.log('News fetched..', news)));
   
  }
  render() {
    return (
      <div className="row news_div">
       { this.state.news.map(news =>
        <ul className="news_mine">

         <li id="first_one">{news.f_id}</li>

          <li class="info_list" id="second_one">
            <label class="switch">
           <input type="checkbox" />
           <span class="slider"></span>
            </label>
        </li>

			    <li id="third_one">{news.f_UrlSite.slice(7,30)}</li>
            
            <li id="fifth_one">{news.f_Language}</li>
               <li id="six_one"><Moment  locale="ru" format="DD.MM.YYYY">{news.f_AddDataInDB}</Moment></li>
         
             <li class="" id="eight_one">
          <a target="_blank" href={news.f_Twitter}><img id="social_icon" src="image/twitter.png" alt="" /></a>
          <a target="_blank" href={news.f_YouTube}><img id="social_icon" src="image/youtube.png" alt="" /></a>
          <a target="_blank" href={news.f_Facebook}><img id="social_icon" src="image/facebook.png" alt="" /></a>
          <a target="_blank" href={news.f_Instagra}m><img id="social_icon" src="image/instagram.png" alt="" /></a>
        
        </li>
         <li id="nine_one"><a target="_blank" href={news.f_Rss}>Link</a></li>
          </ul>
                )}
        </div>
    );
  }
}

export default Sites;
