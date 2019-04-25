import React from 'react';
import  { Link } from 'react-router-dom';
import { merge } from 'lodash';

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cartItems: this.props.cartItems,
            cart: this.props.cart,
            loading: true,
            payment: "credit"
        }

        this.selectOptions = this.selectOptions.bind(this);
        this.cartItemQuantityHandler = this.cartItemQuantityHandler.bind(this);
    }

    selectOptions(max) {
        const options = [];

        for (let idx = 1; idx <= max; idx += 1) {
            options.push(<option key={idx} value={idx}>{idx}</option>);
        }
        
        return options;
    }

    // paymentHandler(event) {
    //     this.setState({payment: })
    // }

    cartItemQuantityHandler(event, cartItem) {
        const value = event.target.value;
        const oldState = this.state.cartItems;

        let newCartItem = merge({}, cartItem);
        newCartItem.quantity = parseInt(value);
        newCartItem.itemPrice = newCartItem.quantity * parseFloat(newCartItem.unitPrice);
        newCartItem.itemPrice = newCartItem.itemPrice.toFixed(2).toString();

        const newState = merge([], oldState, newCartItem);

        this.setState({ cartItems: newState });
        this.props.updateCartItem(this.props.currentUser, newCartItem)
            .then( this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id));
    
    }

    componentDidMount() {
        this.props.fetchCurrentCartID(this.props.currentUser).then( () => {
            this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id).then(this.setState({loading: false}))
        });

    }

    componentDidUpdate(prevProps, prevState) {
        // if an item has been removed length will change, refetch
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
        let cartItems = null;

        if (this.state.loading === true) {
            return null;
        }

        if (Object.values(this.props.cartItems).length > 0) {

            cartItems = this.props.cartItems.map( (cartItem, idx)  => {
                return(
                    <div className="cart-index-item" key={idx}>
                        <h5 className="cart-item-shop-header">{this.props.users[this.props.products[cartItem.product_id].merchant_id].shop_name}</h5>

                        <div className="cart-item-top">
                            <div className="cart-item-left">
                                <div className="cart-item-tile">
                                    <div className="cart-item-image-box">
                                        <img className="cart-item-img" src={this.props.products[cartItem.product_id].productPictures[0]} alt="" />
                                    </div>
                                </div>
                                <div className='cart-item-title'>
                                    {this.props.products[cartItem.product_id].title}
                                </div>
                            </div>

                            <div className="cart-item-right">
                                <select className="quantity-select" type="select" defaultValue={cartItem.quantity} onChange={() => this.cartItemQuantityHandler(event, cartItem)}>
                                    {this.selectOptions(20)}
                                </select>

                                <div className="cart-item-prices">
                                    <span className="cart-item-total-cost">${cartItem.itemPrice}</span>
                                    <span className="cart-item-unit-cost">(${cartItem.unitPrice} each)</span>
                                </div>
                            </div>
                         
                        </div>

                            {/* .then(this.props.fetchCart(this.props.currentUser, this.props.currentUser.cart_id))}> */}
                        <div className="cart-item-bottom" onClick={() => this.props.deleteCartItem(this.props.currentUser, cartItem)}>
                            Remove from cart
                        </div>

                    </div>
                )

            })

            component = (
                <div className="cart-component-subwrapper">
                
                    <div className="cart-component-header">
                        <h1 className="x-items-header">{Object.values(this.props.cartItems).length} items in your cart </h1>
                        <span onClick={() => this.props.ownProps.history.push('/products')} className="keep-shopping-button">Keep shopping</span>
                    </div>

                    <div className="full-cart">
                        <div className="cart-items cart-left">
                            <ul>
                                {cartItems}
                            </ul>
                        </div>

                        <div className="cart-checkout cart-right">
                            <h4 className="pay-header">How you'll pay</h4>

                            <div className="credit-card-radio-div"> 
                                <label htmlFor="credit-card" className="credit-card-label">
                                    <input type="radio" id="credit-card" name="payment-radio" className="payment-radio" value="credit-card" defaultChecked={true}/>
                                    <i className="fab fa-cc-visa payment-fab" />
                                    <i className="fab fa-cc-mastercard payment-fab"/>
                                    <i className="fab fa-cc-amex payment-fab"/>
                                    <i className="fab fa-cc-discover payment-fab"/>
                                </label>
                            </div>

                            <div className="paypal-radio-div">
                                <label htmlFor="paypal" className="credit-card-label">
                                    <input type="radio" id="paypal" name="payment-radio" className="payment-radio" value="paypal"  />
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