import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.signoutButton = this.signoutButton.bind(this);
  }

  signoutButton() {
    this.props.signOut();
  }

  render() {
    //CHANGE THIS
    let section;
    if (this.props.currentUser) {
      section = (
        <>
          <h4>Welcome {this.props.currentUser.email}</h4>
          <button onClick={() => this.signoutButton()}>Signout</button>
        </>
      );
    } else {
      section = (
        <>
          <button onClick={() => this.props.openModal('signin')}>Sign In</button>
          <br />
          <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
        </>
      );
    }

// CHANGE THIS .logo-search will render div with an image tag and a search react component
// CHANGE THIS .icon-nav will conditionally render signup/in or signout icon nav 
    return(
    <div className="nav-bar">
      <div className="logo-search">
        <h3>Handmade</h3>
        <div class="search">This Will be my Search Bar</div>
      </div>
      <div className="icon-nav">
        {section}
      </div>
    </div>
    )
  }

}

export default NavBar;