import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './screens/HomePage';
import CreativePage from './screens/CreativePage';
import Header from './components/Header';
import Footer from './components/Footer';


import BackToTop from 'react-custom-back-to-top-button';

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
      
        <div className='bottom-0'>
          <BackToTop style={{ bottom: '20px', right: '30px' }} />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
