import React from 'react';
import {
  Switch,
  Route,
  Router, // allows us to PROVIDE the history object we want
} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma', // generates all class names with a prefix of `ma` for PRODUCTION, in our `marketing` app ONLY
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
