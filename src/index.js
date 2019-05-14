import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import App from './App';
import About from './components/About';
import Resume from './components/Resume';
import Tapcast from './components/Tapcast';
import Moxtra from './components/Moxtra';
import Spotify from './components/Spotify';
import NotFound from './components/NotFound';
import ComingSoon from './components/ComingSoon';
import MightyHive from './components/MightyHive';
import Lift from './components/Lift';
import FareHarbor from './components/FareHarbor';
import Abstract from './components/Abstract';

import registerServiceWorker from './registerServiceWorker';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import TravelBank from './components/TravelBank';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects/tapcast" component={Tapcast} />
        <Route path="/projects/moxtra" component={Moxtra} />
        <Route path="/projects/spotify" component={Spotify} />
        <Route path="/projects/construction" component={ComingSoon} />
        <Route path="/mightyhive" component={MightyHive} />
        <Route path="/lift" component={Lift} />
        <Route path="/fareharbor" component={FareHarbor} />
        <Route path="/abstract" component={Abstract} />
        <Route path="/travelbank" component={TravelBank} />
        <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('root')
);
registerServiceWorker();
