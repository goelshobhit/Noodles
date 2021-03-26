/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Restaurant from 'containers/Restaurant/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Particles from 'react-particles-js';
import particleJson from 'assets/particle.json';

import GlobalStyle from '../../global-styles';
// eslint-disable-next-line import/no-unresolved
import './style.less';

export default function App() {
  return (
    <div className="appStyle">
      <Particles
        style={{ position: 'absolute' }}
        width="100%"
        params={particleJson}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </div>
  );
}
