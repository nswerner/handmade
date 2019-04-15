import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)



    }

    componentDidMount() {
        this.props.fetchCurrentCartID(this.props.currentUser).then( () => {
            this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id)
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.cartItems.length !== prevProps.cartItems.length) {
            return this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id);
        }

        if (prevProps.cartItems.length > 0) {
            
            for (let idx = 0; idx < this.props.cartItems.length; idx += 1) {
                if (this.props.cartItems[idx].quantity !== prevProps.cartItems[idx].quantity) {
                    return this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id);
                }
            }
        }
    }


    render() {
        let component;

        if (Object.values(this.props.cart).length > 0) {
            component = (
                <div className="cart-component">
                    {this.props.cart.cartTotal}
                </div>
            )
        } else {
            component = (
                <div className="cart-component">
                  WAITING ON CART DATA
                </div>
            )
        }
        
        return(
           component
        )
    }
}


export default Cart;