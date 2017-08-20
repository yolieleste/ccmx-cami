import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import Scrap from '../pages/Scrap.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Register} />
              <Route path = '/login' component={Register} />
              <Route path = '/GVbUJTQAKrJarocholiEleste' component={Scrap} />
            </Switch>
        </div>
      </Router>
    );
  }
}
