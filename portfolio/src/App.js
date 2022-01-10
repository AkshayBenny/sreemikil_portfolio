import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './screens/HomePage';
import CreativePage from './screens/CreativePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}>
            <HomePage />
          </Route>

          <Route exact path='/creative/:id' component={CreativePage}>
            <CreativePage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
