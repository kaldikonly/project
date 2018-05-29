import React, { Component } from 'react';
import arrow from './arrow.png';

const Usnews = () => (
    <div className="col-sm-2 d_block" >
        <div className="d_head">
            <a id="d_ha" href="#">Список важных слов</a>
            < img id="d_arrow" src={arrow}  alt="arrow"/>
        </div>
        <div className="d_head2">
            <li className="text-center" id="a0"> <a id="a0a" href="#">a2</a></li>
            <li className="text-center" id="a1"> <a id="a1a" href="#">A1</a></li>
            <li className="text-center" id="a2"> <a id="a2a" href="#">A2</a></li>
            <li className="text-center" id="a3"> <a id="a3a" href="#">A3</a></li>
        </div>

        <div className="d_main">
            <li className="main_h" id="a1">
                <a id="h_a" href="#">новые</a>
            </li>
            <div className="words_1">
                <li className="hd_wor" >Морковь</li>
                <li ><span className="half_g">55</span></li>
                <li ><span className="half_g">86</span></li>
                <li ><span className="blac" >92</span></li>
            </div>
            <div className="words_2">
                <li className="hd_wor" >Война</li>
                <li ><span className="half_g">58</span></li>
                <li ><span className="half_g">62</span></li>
                <li ><span className="blac">88</span></li>
            </div>
            <div className="words_3">
                <li className="hd_wor" >Мир</li>
                <li ><span className="half_g">67</span></li>
                <li  ><span className="half_g">54</span></li>
                <li ><span className="blac">85</span></li>
            </div>
            <div className="words_4">
                <li className="hd_wor" >Таблицы</li>
                <li ><span className="half_g">68</span></li>
                <li ><span className="half_g">74</span></li>
                <li ><span className="blac">80</span></li>
            </div>
        </div>

        <div className="d_main2">
            <li className="main_h2" id="a1">
                <a id="h_a" href="#">Старые</a>
            </li>
            <div className="words_1">
                <li className="hd_wor" >Морковь</li>
                <li ><span className="half_g">55</span></li>
                <li ><span className="half_g">86</span></li>
                <li ><span className="blac" >92</span></li>
            </div>
            <div className="words_2">
                <li className="hd_wor" >Война</li>
                <li ><span className="half_g">58</span></li>
                <li ><span className="half_g">62</span></li>
                <li ><span className="blac">88</span></li>
            </div>
            <div className="words_3">

                <li className="hd_wor" >Мир</li>
                <li ><span className="half_g">67</span></li>
                <li  ><span className="half_g">54</span></li>
                <li ><span className="blac">85</span></li>

            </div>
            <div className="words_4">

                <li className="hd_wor" >Таблицы</li>
                <li ><span className="half_g">68</span></li>
                <li ><span className="half_g">74</span></li>
                <li ><span className="blac">80</span></li>
            </div>
        </div>

        <div className="d_main3">
            <li className="main_h3" id="a1">
                <a id="h_a" href="#">Ушедшие</a>
            </li>
            <div className="words_1">
                <li className="hd_wor" >Морковь</li>
                <li ><span className="half_g">55</span></li>
                <li ><span className="half_g">86</span></li>
                <li ><span className="blac" >92</span></li>
            </div>
            <div className="words_2">
                <li className="hd_wor" >Война</li>
                <li ><span className="half_g">58</span></li>
                <li ><span className="half_g">62</span></li>
                <li ><span className="blac">88</span></li>
            </div>
            <div className="words_3">
                <li className="hd_wor" >Мир</li>
                <li ><span className="half_g">67</span></li>
                <li  ><span className="half_g">54</span></li>
                <li ><span className="blac">85</span></li>
            </div>
            <div className="words_4">
                <li className="hd_wor" >Таблицы</li>
                <li ><span className="half_g">68</span></li>
                <li ><span className="half_g">74</span></li>
                <li ><span className="blac">80</span></li>
            </div>
        </div>
    </div>

)
export default Usnews;