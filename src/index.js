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
import TapcastBilling from './components/TapcastBilling';
import NotFound from './components/NotFound';
import ComingSoon from './components/ComingSoon';
import MightyHive from './components/MightyHive';
import Lift from './components/Lift';
import Abstract from './components/Abstract';
import Heap from './components/Heap';
import Zeplin from './components/Zeplin';
import Pantheon from './components/Pantheon';
import Lyric from './components/Lyric';
import GrouponReview from './components/GrouponReview';

import registerServiceWorker from './registerServiceWorker';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects/tapcastplatform" component={Tapcast} />
        <Route path="/projects/moxtra" component={Moxtra} />
        <Route path="/projects/spotify" component={Spotify} />
        <Route path="/projects/tapcastbilling" component={TapcastBilling} />
        <Route path="/projects/construction" component={ComingSoon} />
        <Route path="/reviews/groupon" component={GrouponReview} />
        <Route path="/mightyhive" component={MightyHive} />
        <Route path="/lift" component={Lift} />
        <Route path="/abstract" component={Abstract} />
        <Route path="/heap" component={Heap} />
        <Route path="/zeplin" component={Zeplin} />
        <Route path="/pantheon" component={Pantheon} />
        <Route path="/lyric" component={Lyric} />
        <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('root')
);
registerServiceWorker();
