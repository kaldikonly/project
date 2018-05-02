import React, { Component } from 'react';
import './search_line_syle.css';

class Search_line extends Component{
    render() {
        return (
            <div id="first_row">
                <div id="search_flex_block">
                    <div id="search_container">
                        <label id="search_label" htmlFor="">
                            <input id="sitesSearch" type="text" placeholder="Поиск..."/></label>
                    </div>
                    <div id="btn_container">
                        <button id="blue_btn" className="blue_btn" type="button">Поиск</button>
                        <button id="blue_btn" className="blue_btn export_btn" type="button">Экспорт</button>
                        <button id="gray_btn" className="gray_btn" type="button">Добавить сайт</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search_line;