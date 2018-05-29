import React, { Component } from 'react';
import Left from './parts/Left';
import Opt_news from './parts/Opt_news';
import Analys from './urls/Analys';


const Usanalys = () => (
	<div className="container-fluid">
        <div className="row">
            <Left/>
            <div className="col main_content">
                <Opt_news/>
                <div className="col">
                    <div className="row body_pages">
                        <Analys/>

                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Usanalys;
