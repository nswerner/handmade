import React from 'react';


class SessionNav extends React.Component {
    constructor(props) {
        super(props)

        this.sessionNav = this.sessionNav.bind(this);
    }



    sessionNav() {
        if (this.props.currentUser) {
            // CHANGE THIS PROFILE IMAGE
            return (
                <div className="icon-nav">
                    <button className="white-button sign-out" onClick={this.props.signOut}> Sign Out</button>
                    <button className="icon-button store-mngr"> <i className="fas fa-store"/> Shop Manager</button>
                    <button className="icon-button profile-button"> <img src={window.proDefSmall} alt="small default profile image" /> <span>You <i className="fas fa-caret-down"/></span> </button>
                    <button className="icon-button cart-button"> <i className="fas fa-shopping-cart"/> Cart</button>
                </div>
            )
        } else {
            return (
                <div className="icon-nav">
                    <button className="button-to-link" onClick={() => this.props.demoLogin(this.props.demoUser)}>Demo</button>
                    <button className="button-to-link" onClick={() => this.props.openModal('signup')}>Register</button>
                    <button className="white-button sign-in" onClick={() => this.props.openModal('signin')}>Sign In</button>
                    <button className="icon-button cart-button" onClick={() => this.props.openModal('signin')}><i className="fas fa-shopping-cart"/>Cart</button>
                </div>
            )
        }
    }



    render() {

        return(
            this.sessionNav()
        )
    }
}

export default SessionNav;