import React, {Component} from 'react';
import './news.css';
import smile from './smile.png';
import prev from './icons/baseline-navigate_before-24px.svg';
import next from './icons/baseline-navigate_next-24px.svg';
import filter from './icons/baseline-filter_list-24px.svg';
import face from './icons/baseline-mood-24px.svg';
import refresh from './icons/baseline-refresh-24px.svg';
import img2 from './img2.png';
import Moment from 'react-moment';
import 'moment/locale/ru';
import ImageLoader from 'react-image-file';

class News extends Component {
    constructor() {
        super();
        this.state = {
            f_news: []
        }
    }

    componentDidMount() {
        fetch('/getnews')
            .then(res => res.json())
            .then(f_news => this.setState({f_news}, () => console.log('News fetched..', f_news)));
    }

    function

    render() {

        return (


            <div className="col main_state">
                <div className="col nav_news_card shadow-sm">
                    <div className="nav_news_flex">
                        <div className="left_container">
                            <button className="blue_btn update_news"><img src={refresh} alt=""/>25</button>
                            <button className="blue_btn update_news">Аналитика</button>
                        </div>
                        <div className="right_container">
                            <div className="control_wrap nav_news_flex">
                                <p className="control_index">
                                    <span className="first_control_index">1&ensp;</span>-
                                    <span className="first_control_index">&ensp;50&ensp;</span>из
                                    <span className="first_control_index">&ensp;25 562</span>
                                </p>
                                <div className="control_arrow ">
                                    <button className="next_news_page">
                                        <img src={prev} alt="Navigate before"/>
                                    </button>
                                    <button className="prev_news_page">
                                        <img src={next} alt="Navigate next"/>
                                    </button>
                                    <button className="filter_news_page">
                                        <img src={filter} alt="Navigate filter"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  test  21.05.12   */}

                <div className="news_card shadow-sm">
                    <div className="news_card_flex">
                        <div className="left-container">
                            <a href="#" className="source_name" id="rec_name">Название ресурса</a>
                            <span className="publication_time" id="rec_time"><Moment locale="ru"
                                                        format="Do MMM YYYY h:mm">f_PublicationDate</Moment> (<Moment
                                locale="ru" fromNow>f_PublicationDate</Moment>)</span>
                        </div>
                        <div className="right_container">
                            <fieldset className="rating" id="rate">
                                <input type="radio" id="star5" name="rating" value="5"/>
                                    <label className="full" htmlFor="star5" title="Awesome - 5 "></label>
                                <input type="radio" id="star4" name="rating" value="4" checked="true"/><label
                                className="full" htmlFor="star4" title="Pretty good - 4 "></label>
                                <input type="radio" id="star3" name="rating" value="3" checked="true"/><label
                                className="full" htmlFor="star3" title="Meh - 3 "></label>
                                <input type="radio" id="star2" name="rating" value="2" checked="true"/><label
                                className="full" htmlFor="star2" title="Kinda bad - 2 "></label>
                                <input type="radio" id="star1" name="rating" value="1" checked="true"/><label
                                className="full" htmlFor="star1" title="1"></label>
                                <span className="rating_index" id="rec_rating">1</span>
                            </fieldset>
                        </div>
                    </div>

                    <div className="news_body clearfix">

                        <div className="news_text">
                            <div className="news_text_container">
                                <div className="img_container">
                                    <img src={img2} alt=""/>
                                </div>
                                <a className="news_title_link" href="#">Заголовок новости</a>
                                <p className="news_text">
                                    Приветствую! Есть родитель:.wrap display: flex; flex-wrap: wrap И два дочерних:.block ... Должен использоваться Flexbox 2. ... нажатии на слово(или кнопку) раскрывалось окно с видео/картинками/текстом и т.д?<br/>
                                    Приветствую! Есть родитель:.wrap display: flex; flex-wrap: wrap И два дочерних:.block ... Должен использоваться Flexbox 2. ... нажатии на слово(или кнопку) раскрывалось окно с видео/картинками/текстом и т.д?<br/>
                                    Приветствую! Есть родитель:.wrap display: flex; flex-wrap: wrap И два дочерних:.block ... Должен использоваться Flexbox 2. ... нажатии на слово(или кнопку) раскрывалось окно с видео/картинками/текстом и т.д?<br/>
                                    Приветствую! Есть родитель:.wrap display: flex; flex-wrap: wrap И два дочерних:.block ... Должен использоваться Flexbox 2. ... нажатии на слово(или кнопку) раскрывалось окно с видео/картинками/текстом и т.д?
                                    <span className="expand_text"> ...далее</span>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="footer_news_body">
                        <div className="right_column">
                            <img src={face} alt=""/>
                        </div>
                        <div className="left_column">

                            <button className="news_btn news_card_more_info">
                                Подробнее
                            </button>
                            <a className="news_card_link" href="#">
                                <button className="news_btn news_card_read">
                                    Читать
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="reason">
                    <li>
                        <span id="rec_name">f_Category</span>
                        <span id="rec_time"><Moment locale="ru"
                                                    format="Do MMM YYYY h:mm">f_PublicationDate</Moment> (<Moment
                            locale="ru" fromNow>f_PublicationDate</Moment>)</span>

                        <fieldset className="rating" id="rate">
                            <input type="radio" id="star5" name="rating" value="5"/><label className="full"
                                                                                           htmlFor="star5"
                                                                                           title="Awesome - 5 "></label>
                            <input type="radio" id="star4" name="rating" value="4" checked="true"/><label
                            className="full" htmlFor="star4" title="Pretty good - 4 "></label>
                            <input type="radio" id="star3" name="rating" value="3" checked="true"/><label
                            className="full" htmlFor="star3" title="Meh - 3 "></label>
                            <input type="radio" id="star2" name="rating" value="2" checked="true"/><label
                            className="full" htmlFor="star2" title="Kinda bad - 2 "></label>
                            <input type="radio" id="star1" name="rating" value="1" checked="true"/><label
                            className="full" htmlFor="star1" title="1"></label>
                        </fieldset>
                        <span id="rec_rating">7.6</span>
                    </li>
                    <li id="rec_li">

                        <img id="rec_img" src={img2} alt="first"/>
                        <h2 id="rec_hd">f_Title</h2>
                        <p id="rec_text">f_Fulltext
                            <a id="rec_all" href="#">
                                ...далее</a></p>
                        <a id="rec_opn" href="#">
                            <i id="rec_icn" className="fas fa-angle-down"></i></a>

                    </li>
                    <ul>
                        <li id="left_dw">
                            <a id="next" target="_blank" href="">
                                <img src={next} alt="arrow best"/></a></li>
                        <li id="read"><a target="_blank" href="">читать</a></li>
                        <li id="more"><a href="#">подробнее</a></li>
                        <li id="smile"><img id="smile_a" src={smile} alt="first"/></li>
                    </ul>

                </div>


                {/*  test end 21.05.12   */}

                {this.state.f_news.map(f_news =>
                    <div className="reason">
                        <li>
                            <span id="rec_name">{f_news.f_Category}</span>
                            <span id="rec_time"><Moment locale="ru"
                                                        format="Do MMM YYYY h:mm">{f_news.f_PublicationDate}</Moment> (<Moment
                                locale="ru" fromNow>{f_news.f_PublicationDate}</Moment>)</span>

                            <fieldset className="rating" id="rate">
                                <input type="radio" id="star5" name="rating" value="5"/><label className="full"
                                                                                               for="star5"
                                                                                               title="Awesome - 5 "></label>
                                <input type="radio" id="star4" name="rating" value="4" checked="true"/><label
                                className="full" for="star4" title="Pretty good - 4 "></label>
                                <input type="radio" id="star3" name="rating" value="3" checked="true"/><label
                                className="full" for="star3" title="Meh - 3 "></label>
                                <input type="radio" id="star2" name="rating" value="2" checked="true"/><label
                                className="full" for="star2" title="Kinda bad - 2 "></label>
                                <input type="radio" id="star1" name="rating" value="1" checked="true"/><label
                                className="full" for="star1" title="1"></label>
                            </fieldset>
                            <span id="rec_rating">7.6</span>
                        </li>
                        <li id="rec_li">

                            <img id="rec_img" src={img2} alt="first"/>
                            <h2 id="rec_hd">{f_news.f_Title.split(" ", 8).join(" ")}</h2>
                            <p id="rec_text">{f_news.f_Fulltext.slice(0, 225)}
                                <a id="rec_all" href="#">
                                    ...далее</a></p>
                            <a id="rec_opn" href="#">
                                <i id="rec_icn" className="fas fa-angle-down"></i></a>

                        </li>
                        <ul>
                            <li id="left_dw">
                                <a id="next" target="_blank" href={f_news.f_LinkToNews}>
                                    <img src={next} alt="arrow best"/></a></li>
                            <li id="read"><a target="_blank" href={f_news.f_LinkToNews}>читать</a></li>
                            <li id="more"><a href="#">подробнее</a></li>
                            <li id="smile"><img id="smile_a" src={smile} alt="first"/></li>
                        </ul>

                    </div>
                )}
            </div>


        );
    }
}

export default News;
