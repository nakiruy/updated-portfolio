import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import App from './App';
import About from './components/About';
import Works from './components/Works';
import Resume from './components/Resume';

import registerServiceWorker from './registerServiceWorker';

import {
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
    </div>
  </Router>, document.getElementById('root')
);
registerServiceWorker();
