import React from 'react';
import { Link } from 'react-router-dom';


class ProfileDropdown extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div onClick={this.props.handleDD} className="profile-dropdown">
                <div className="flag-background"> 
                    <div className="flag-foreground"></div>
                </div>
                <div className="dropdown-header">
                    <Link className="dd-img" to={`users/${this.props.currentUser.id}`}><img src={window.proDefSmall}/></Link>
                    <div className="dd-name">
                        <Link className="name-link" to={`users/${this.props.currentUser.id}`}>{this.props.currentUser.email}</Link>
                    </div>
                    <div className="view-profile">
                        <Link className="view-pro-link" to={`users/${this.props.currentUser.id}`}>View profile <i class="fa fa-angle-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="dropdown-list-box">
                    <ul className="dropdown-list-ul">
                        <li className="purchases-reviews">Purchases and reviews</li>
                        <li className="account-settings">Account settings</li>
                    </ul>
                </div>
                <div className="sign-out-box">
                    <button className="pro-dd-signout-button" onClick={this.props.signOut}>Sign Out</button>
                </div>
            </div>
        )
    }

}
export default ProfileDropdown;