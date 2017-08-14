const React = require('react');
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="h1 navbar-brand mb-0">React Weather</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Get Weather</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/examples" className="nav-link">Examples</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search weather" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Get Weather</button>
          </form>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;