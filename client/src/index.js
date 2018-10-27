import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import Layout from './components/Layout'
import rootReducer from './reducers'
import Question from './containers/Question';
import Quiz from './containers/Quiz'
import * as serviceWorker from './serviceWorker';

const reduxDevTools = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger), reduxDevTools)
)

render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Question} />
          <Route path="/quizes" component={Quiz} />
        </Switch>
      </Layout>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
