
import React from 'react';
import {Route,Switch,link} from 'react-router-dom';
import Brand from './Pages/brandorder';
import Order from './Pages/manufacturerorder';

import Scan from './Pages/scanner';
import AdminForm from './Pages/user.js';

class App extends React.Component {

    render(){
      return (
        <div>
           <Switch>
  <Route exact path='/createitem' component={Scan}/>
  <Route exact path='/adminpanel' component={AdminForm}/>
  <Route exact path='/order' component={Order} />
  <Route exact path='/brand' component={Brand} />
  </Switch>
        </div>
      )
    }}

export default App;