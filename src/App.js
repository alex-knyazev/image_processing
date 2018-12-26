import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Gradations from './components/Gradations';
import Filters from './components/Filters';
import FaceDetection from './components/FaceDetection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/grad">Gradations</Link>
                </li>
                <li>
                  <Link to="/filters/">Filters</Link>
                </li>
                <li>
                  <Link to="/face/">Face detection</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/grad" component={Gradations} />
            <Route exact path="/filters" component={Filters} />
            <Route exact path="/face" component={FaceDetection} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
