import React from 'react';
import ProfileDropdown from "./profile_dropdown/profile_dropdown_container";
import { Link } from 'react-router-dom';


class SessionNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDropdown: false
        };

        // this.handleDD = this.handleDD.bind(this);
        this.sessionNav = this.sessionNav.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }


    showDropdown(e) {
        e.preventDefault();

        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.closeDropdown);
        });
    }

    closeDropdown() {
        this.setState({ showDropdown: false }, () => {
            document.removeEventListener('click', this.closeDropdown);
        });
    }


    // handleDD() {
    //     this.state.showDropdown ? this.setState({ showDropdown: false }) : this.setState({ showDropdown: true });
    // }

    sessionNav() {
        if (this.props.currentUser) {
            
            if (this.state.showDropdown) {
                this.dropdown = <ProfileDropdown closeDropdown={this.closeDropdown}/>
            } else {
                this.dropdown = null;
            }

            if (this.props.currentUser.shop_name) {
                this.manager = <Link to="/shopManager" className="icon-button store-mngr"> <i className="fas fa-store" /> Shop Manager</Link>
            } else {
                this.manager = <Link to="/createShop" className="icon-button store-mngr"> <i className="fas fa-store" /> Shop Manager</Link>
            }

            // CHANGE THIS PROFILE IMAGE TO RENDER THE DEFAULT OR THE USERS PICTURE IF PRESENT

            // debugger
            return (
                <div className="icon-nav">
                    {this.manager}
                    <button onClick={this.showDropdown} className="icon-button profile-button"> <img src={window.proDefSmall} alt="small default profile image" /> <span>You <i className="fas fa-caret-down"/></span> </button>
                    {this.dropdown}
                    <button className="icon-button cart-button"> <i className="fas fa-shopping-cart"/> Cart</button>
                </div>
            )
        } else {

            return (
                <div className="icon-nav">
                    <button className="button-to-link" onClick={ () => this.props.demoLogin(this.props.demoUser).then( () => this.props.history.push('/products') ) } >Demo</button>
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