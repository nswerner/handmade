import React from "react";


class CreateShop extends React.Component {
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
            data: {user: {shop_name: `${this.state.shop_name}`}} })
                .then( (user) => this.props.receiveCurrentUser(user))
                .then( () => this.props.history.push('/shopManager'));  
    }

    render() {

        this.shop_name = <input className="shop-name-input" type="text" value={this.state.shop_name} onChange={this.handleChange()} />
        this.form = (
            <div className="create-shop">
                <h1 className="manager-h2">Create a Shop</h1>
                <form className="create-shop-form" onSubmit={this.handleSubmit}>
                    {this.shop_name}
                    <input className="create-shop-button" type="submit" value="Create Shop"/>
                </form>
            </div>
        )

        this.products = null;
    

        return(
            <div className="create-shop-box">
                {this.form}
            </div>
        );
    }
}

export default CreateShop;