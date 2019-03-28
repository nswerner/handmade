import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search/search_container';
import SessionNav from './session/session_nav_container';



class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.signoutButton = this.signoutButton.bind(this);
  }

  signoutButton() {
    this.props.signOut();
  }

  render() {

    return(
      <header className="nav-bar">
        <div className="logo-search">
          <h3><Link to="/">Handmade</Link></h3>
          <Search/>
        </div>
        <SessionNav className="icon-nav"/>
      </header>
    )
  }

}

export default NavBar;