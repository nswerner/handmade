import React from 'react';
import  { Link } from 'react-router-dom';

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
        let component = null;
        let emptyCart = null;


        if (Object.values(this.props.cartItems).length > 0) {
            debugger
            component = (
                <div className="cart-component-subwrapper">
                
                    <div className="cart-component-header">
                        <h1 className="x-items-header">{Object.values(this.props.cartItems).length} items in your cart </h1>
                        <span onClick={() => this.props.ownProps.history.push('/products')} className="keep-shopping-button">Keep shopping</span>
                    </div>

                    <div className="full-cart">
                        <div className="cart-items cart-left">
                            
                        </div>

                        <div className="cart-checkout cart-right">
                            <h4 className="pay-header">How you'll pay</h4>

                            <div className="credit-card-radio-div"> 
                                <label htmlFor="credit-card" className="credit-card-label">
                                    <input type="radio" id="credit-card" className="payment-radio" value="credit-card" checked={true} />
                                    <i className="fab fa-cc-visa payment-fab" />
                                    <i className="fab fa-cc-mastercard payment-fab"/>
                                    <i className="fab fa-cc-amex payment-fab"/>
                                    <i className="fab fa-cc-discover payment-fab"/>
                                </label>
                            </div>

                            <div className="paypal-radio-div">
                                <label htmlFor="paypal" className="credit-card-label">
                                    <input type="radio" id="paypal" className="payment-radio" value="paypal" checked={false} />
                                    <i className="fab fa-cc-paypal payment-fab"/>
                                </label>
                            </div>

                            <div className="checkout-total">

                                <div className="total-header">
                                    Total ({ Object.values(this.props.cartItems).length } items)
                                </div>

                                <div className="total-cost">
                                    ${this.props.cart.cartTotal}
                                </div>

                                
                            
                            </div>

                            <div className="checkout-button">Proceed to checkout</div>
                        
                        </div>
                    </div>
                </div>
            )
        } else {

            emptyCart = (
                <div className="empty-cart">
                    <h2 className="empty-header">Your cart is empty</h2>
                    <Link className="empty-link" to="products">Find something unique to fill it up</Link>
                </div>
            )
        }
        
        return(
            <div className="cart-component">
                {component}
                {emptyCart}
           </div>

        )
    }
}


export default Cart;