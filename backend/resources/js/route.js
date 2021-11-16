import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Example from './pages/Example';
import Map from './pages/Map';

  function App() {
    return (
        <div>
            <Switch>
              <Route path='/example' exact component={Example} />
              <Route path='/' exact component={Map} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
