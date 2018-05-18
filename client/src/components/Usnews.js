import React, { Component } from 'react';
import Left from './parts/Left';
import News from './urls/News';
import Word_news from './urls/Word_news';
import Opt_news from './parts/Opt_news';


const Usnews = () => (
		<div >
  		<Left />
  		<Opt_news />
     	<News />
     	<Word_news />
      </div>
)
export default Usnews;
