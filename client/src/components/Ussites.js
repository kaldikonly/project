import React, { Component } from 'react';
import Left from './parts/Left';
import Opt_sites from './parts/Opt_sites';
import Sites from './urls/Sites';


const Ussites = () => (
    <div className="container-fluid">
        <div className="row">
            <Left/>
            <div className="col main_content">
                <Opt_sites/>
                <div className="col">
                    <div className="row body_pages">
                        <Sites/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Ussites;
