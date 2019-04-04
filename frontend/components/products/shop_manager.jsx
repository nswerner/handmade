import React from "react";
import { Link } from 'react-router-dom';

class ShopManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shop_name: this.props.shop_name
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        return (e) => {
            this.setState({ shop_name: e.currentTarget.value} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax({
            method: "PATCH",
            url: `/api/users/${this.props.currentUser.id}`,
            data: {user: {shop_name: `${this.state.shop_name}`}}
        }).then( (user) => this.props.receiveCurrentUser(user));    
    }

    // componentDidUpdate(oldState, oldProps) {
    //     if (this.props.shop_name !== oldProps.shop_name) {
    //         this.setState({shop_name: this.props.shop_name})
    //     }
    // }

    render() {

        if (this.props.shop_name) {
            this.shopName = <h1 className="manager-h1">{this.props.currentUser.shop_name}</h1>
            this.addListing = <Link to="/addListing" className="black-button add-listing"> <i className="fas fa-plus" /> Add Listing </Link>
            this.form = (
                <div className="manager-form">
                    {this.shopName}
                    {this.addListing}
                </div> 
            )
        } else {
            this.shopName = <input className="shop-name-input" type="text" value={this.state.shopName} onChange={this.handleChange()} />
            this.addListing = null;
            this.form = (
                <form className="manager-form-real" onSubmit={this.handleSubmit}>
                    {this.shopName}
                    <input className="create-shop-button" type="submit" value="Create Shop"/>
                </form>
            )
        }

        return(
            <div className="shop-manager-box">
                <header className="shop-manager-header">
                    {this.form}
                </header>
            </div>
        );
    }
}

export default ShopManager;