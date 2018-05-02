import React, { Component } from 'react';
import Left from './parts/Left';
import Opt_sites from './parts/Opt_sites';
import Opt from './parts/search_bar/Search_line';
import Sites from './urls/Sites';


const Ussites = () => (
		<div >
  		<Left />
  		<Opt_sites />
		<Opt />
     	<Sites />
      </div>
)
export default Ussites;
