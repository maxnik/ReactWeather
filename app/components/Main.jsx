const React = require('react');
import {Route, Switch} from 'react-router-dom';
const Nav = require('Nav');
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

const Main = React.createClass({
  render: function () {
    return (
      <div>
        <Route path="/" component={Nav}/>
        <h2>Main component</h2>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route path="/" component={Weather} />
        </Switch>
      </div>
    );
  }
});

module.exports = Main;