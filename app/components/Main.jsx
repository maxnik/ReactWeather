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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/examples" component={Examples} />
                <Route path="/" component={Weather} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;