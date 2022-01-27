import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './screens/HomePage';
import CreativePage from './screens/CreativePage';
import Header from './components/Header';
import Footer from './components/Footer';
import IllustrationPage from './screens/IllustrationPage';

import ScrollToTop from './components/ScrollToTop';
import BackToTop from 'react-custom-back-to-top-button';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}>
              <HomePage />
            </Route>

            <Route exact path='/creative/:id' component={CreativePage}>
              <CreativePage />
            </Route>

            <Route exact path='/illustrations' component={IllustrationPage}>
              <IllustrationPage />
            </Route>
          </Switch>

          <div className='bottom-0'>
            <BackToTop
              style={{
                bottom: '20px',
                right: '30px',
                backgroundColor: '#fff',
                color: '#613EE2',
              }}
            />
          </div>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
