import React, {Component} from 'react';
import './opt_news.css';
import axios from 'axios';
import Stringify from 'react-stringify';

class Opt_news extends Component {

    constructor() {
        super();
        this.state = {
            seti: 'false',
            mySearch: ' '
        }
    }

    handleSetiChange = (e) => {

        this.setState({
            seti: e.target.checked,
            mySearch: e.target.value
        })
        console.log(this.state.mySearch)
    }


    handleClick = (e) => {

        const arr = {
            name: this.state.mySearch
        }
        axios
            .post('/students', {arr: JSON.stringify()})
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('YEEEESSSS');
            })


    }


	render(){
		return (

            <div className="navbar sticky-top news_part">

                <div className="row search_row" id="first_row">
                    <div className="col search_flex_block" id="search_flex_block">
                        <div id="search_container">
                            <label id="search_label" htmlFor="">
                                <input className="sitesSearch" id="newssearch" type="text" value={this.state.mySearch} onChange={this.handleSetiChange} placeholder="Поиск..."/></label>
                                {/*<input className="sitesSearch" id="newssearch" type="text" value={this.state.mySearch} onChange={this.handleSetiChange} placeholder="Поиск..."/></label>*/}
                        </div>
                        <div id="btn_container">
                            <button id="n_search blue_btn" className="blue_btn" type="button"  onClick={this.handleClick}>Поиск</button>
                            <div id="reportrange">
                                <span></span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row news_filter_container" id="news_filter">
                    <button id="clear_filter" className="gray_btn clear_filter">Очисить все</button>
                    <button id="add_filter" className="blue_btn add_filter">Добавить фильтр</button>

                    {/*<a id="filter_record" href="">*/}
                        {/*<span id="filter_word"></span><span id="or">OR</span>*/}
                    {/*</a>*/}
                    {/*<a id="band" href="#"><span>AND</span></a>*/}
                </div>



                {/*<div id="filter_table">*/}
                    {/*<li className="text-center"><h4 id="fil_cho">выберите фильтр</h4></li>*/}

                    {/*<li><label className="containeree">По тональности*/}
                        {/*<input id="tone_r" type="checkbox"/>*/}
                        {/*<span className="checkmark"></span>*/}
                    {/*</label>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                        {/*<label className="containeree">По источникам*/}
                            {/*<input id="where_r" type="checkbox"/>*/}
                            {/*<span className="checkmark"> </span>*/}
                        {/*</label>*/}
                    {/*</li>*/}

                    {/*<li><label className="containeree">По авторам*/}
                        {/*<input id="author_r" type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}

                    {/*<li id="opt" className="text-center"><a id="den" href="#">отмена</a>*/}
                        {/*<a id="conf" href="#">ок</a></li>*/}

                    {/*<button type="button" id="n_search" onClick={this.handleClick}>поиск</button>*/}
                {/*</div>*/}

                {/*<div className="row wow" id="fil_row">*/}
                    {/*<a id="clear_all" href="#">очистить все</a>*/}
                    {/*<a id="fil_add" href="#">Добавить фильтр</a>*/}
                    {/*<a id="tone_f" href="#">тональность</a>*/}
                    {/*<a id="who_f" href="#">источники</a>*/}
                    {/*<a id="author_f" href="#">авторы</a>*/}
                {/*</div>*/}
                {/*<div id="tone_op">*/}
                    {/*<li className="text-center"><h4 id="fil_cho">выберите тональность</h4></li>*/}
                    {/*<li className="rainee"><label className="containeree">негативная*/}
                        {/*<input id="tone_r" type="checkbox"/>*/}
                        {/*<span className="checkmark"></span>*/}
                    {/*</label>*/}
                    {/*</li>*/}

                    {/*<li className="rainee">*/}
                        {/*<label className="containeree">позитивная*/}
                            {/*<input id="where_r" type="checkbox"/>*/}
                            {/*<span className="checkmark">*/}
  							{/*</span>*/}
                        {/*</label></li>*/}

                    {/*<li className="rainee"><label className="containeree">нейтральная*/}
                        {/*<input id="author_r" type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}

                    {/*<li className="rainee"><label className="containeree">неоеределено*/}
                        {/*<input id="author_r" type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}

                {/*</div>*/}

                {/*<div id="who_option">*/}
                    {/*<h3 id="who_hd">выберите категорию</h3>*/}
                    {/*<li><label id="who_1" className="containeree">социальные сети*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark"></span>*/}
                    {/*</label>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<label id="who_1" className="containeree">сми*/}
                            {/*<input type="checkbox"/>*/}
                            {/*<span className="checkmark">*/}
  							{/*</span>*/}
                        {/*</label></li>*/}
                    {/*<li><label id="who_1" className="containeree">блоги*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}
                    {/*<li><label id="who_1" className="containeree">неопределено*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}
                    {/*<li><label id="who_1" className="containeree">форумы*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}
                    {/*<h3 id="who_hd">выберите источники</h3>*/}
                    {/*<i id="who_ic" className="fas fa-search"></i>*/}
                    {/*<input id="who_srch" type="text" placeholder="Search"/>*/}
                    {/*<br/>*/}
                    {/*<li><label id="who_" className="containeree">vk.com*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark"></span>*/}
                    {/*</label>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<label id="who_" className="containeree">facebook*/}
                            {/*<input type="checkbox"/>*/}
                            {/*<span className="checkmark">*/}
  							{/*</span>*/}
                        {/*</label></li>*/}
                    {/*<li><label id="who_" className="containeree">twitter*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}
                    {/*<li><label id="who_" className="containeree">instagram*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}
                    {/*<li><label id="who_" className="containeree">google+*/}
                        {/*<input type="checkbox"/>*/}
                        {/*<span className="checkmark">*/}
  							{/*</span>*/}
                    {/*</label></li>*/}

                {/*</div>*/}
            </div>


        );
    }
}

export default Opt_news;