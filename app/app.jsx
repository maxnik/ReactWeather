const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
const Main = require('Main');
const Weather = require('Weather');

require('./styles/main.scss');

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app')
);