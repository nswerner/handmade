import React from 'react';

class SessionNav extends React.Component {
    constructor(props) {
        super(props)

        this.sessionNav = this.sessionNav.bind(this);
    }


    sessionNav() {
        if (this.props.currentUser) {
            // html for logged in
                // buttons:
                    // Shop Manager
                    // My Orders
                    // Profile
                    // Cart
            return (
                <div>
                    Inside the LoggedInNav
                </div>
            )
        } else {
            // html for logged out
                // buttons:
                    // Demo
                    // Register
                    // Sign In
                    // Cart => opens signin modal
            return (
                <div>
                    Inside the LoggedOutNav
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