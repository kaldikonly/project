import React, { Component } from 'react';
import Us from './components/url_elements/Url_btn.js';
import './search_line_syle.css';

class Search_line extends Component{
    render() {
        return (
            <div id="first_row">
                <div id="search_flex_block">
                    <div id="search_container">
                        <label id="search_label" htmlFor="">
                            <input id="sitesSearch" type="text" placeholder="Поиск..."/>
                        </label>
                    </div>

                    <Us />

                </div>
            </div>
        );
    }
}

export default Search_line;
