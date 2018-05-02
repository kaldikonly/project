import React, {Component} from 'react';
import './opt_sites.css';

class Opt_sites extends Component {
    render() {
        return (
            <div className="col main_part">

                <div id="first_row">
                    <div id="search_flex_block">
                        <div id="search_container">
                            <label id="search_label" htmlFor="">
                                <input id="sitesSearch" type="text" placeholder="Поиск..."/></label>
                        </div>
                        <div id="btn_container">
                            <button id="blue_btn" class="blue_btn" type="button">Поиск</button>
                            <button id="blue_btn" class="blue_btn export_btn" type="button">Экспорт</button>
                            <button id="gray_btn" class="gray_btn" type="button">Добавить сайт</button>
                        </div>
                    </div>
                </div>
                <div id="filter_part">
                    <button id="clear_filter" class="gray_btn clear_filter">Очисить все</button>
                    <button id="add_filter" class="blue_btn add_filter">Добавить фильтр</button>

                    <a id="filter_record" href=""><span id="filter_word"></span><span id="or">OR</span></a>
                    <a id="band" href="#"><span>AND</span></a>
                </div>
                <ul id="filter_option">
                    <li><a className="filter_text" href="">name</a></li>
                    <li><a className="filter_text" href="">region</a></li>
                    <li><a className="filter_text" href="">state</a></li>
                    <li><a className="filter_text" href="">country</a></li>
                </ul>

                <div className="row" id="main_choose">

                    <div className="info_list" id="number1"><img src="image/columns.png" alt=""/></div>
                    <div className="info_list" id="number2"><a href="#">chek</a></div>
                    <div className="info_list" id="number3"><a href="#">name</a></div>
                    <div className="info_list" id="number4"><a href="#">region</a></div>
                    <div className="info_list" id="number5"><a href="#">lang</a></div>
                    <div className="info_list" id="number6"><a href="#">pub date</a></div>
                    <div className="info_list" id="number7"><a href="#">rating</a></div>
                    <div className="info_list" id="number8"><a href="#">social Links</a></div>
                    <div className="info_list" id="number9"><a href="#">rss</a></div>
                    <div className="info_list" id="number9"><a href="#">age of site</a></div>
                    <div id="number10"><a href=""><img src="image/Add.png" alt=""/></a></div>
                </div>
            </div>
        );
    }
}

export default Opt_sites;