const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router-dom');
import createBrowserHistory from 'history/createBrowserHistory';
const Main = require('Main');
const Weather = require('Weather');

require('./styles/main.scss');

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('app')
);