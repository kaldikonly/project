import React, { Component } from 'react';
import Left from './parts/Left';
import News from './urls/News';
import Word_news from './urls/Word_news';
import Opt_news from './parts/Opt_news';


const Usnews = () => (
    <div className="container-fluid">
        <div className="row">
            <Left/>
            <div className="col main_content">
                <Opt_news/>
                <div className="container">
                    <div className="row">
                        <News/>
                        <Word_news/>
                    </div>
                </div>
            </div>
        </div>
    </div>



)
export default Usnews;
