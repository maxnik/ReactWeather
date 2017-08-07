const React = require('react');
import {NavLink} from 'react-router-dom';

const Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Navigation</h1>
        <ul>
          <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</NavLink></li>
          <li><NavLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</NavLink></li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;