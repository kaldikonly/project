import React, { Component } from 'react';
import './url_btn_syle.css';

class Url_btn extends Component{
    render() {
        return (

            <div id="btn_container">
                <button id="blue_btn" className="blue_btn" type="button">Поиск</button>
                <button id="blue_btn" className="blue_btn export_btn" type="button">Экспорт</button>
                <button id="gray_btn" className="gray_btn" type="button">Добавить сайт</button>
            </div>

        );
    }
}

export default Url_btn;