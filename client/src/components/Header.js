import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './parts/Main';
import Usnews from './Usnews';
import Ussites from './Ussites';
import Usanalys from './Usanalys';
import Soon from './parts/Soon';

const Header = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
       <Route path='/news' component={Usnews}/>
      <Route path='/search' component={Ussites}/>
       <Route path='/analys' component={Usanalys}/>
      <Route path='/soon' component={Soon}/>
    </Switch>
  </main>
)
export default Header;