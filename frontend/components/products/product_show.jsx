import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPicture: 0
        }

        this.product = null;
        this.selectOptions = this.selectOptions.bind(this);
        this.picturesArray = this.picturesArray.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId);
    }


    componentDidUpdate(oldProps) {
        if (this.props.match.params.id !== oldProps.match.params.id) {
            this.props.fetchProduct(this.props.match.params.id);
        }
    }

    selectOptions(stock) {
        const options = [];

        for (let idx = 2; idx <= stock; idx += 1) {
            options.push(<option key={idx} value={`${idx}`}>{idx}</option>);
        }

        return options;
    }

    picturesArray() {
        const pictures = [];

        for (let idx = 0; idx < this.product.productPictures.length; idx += 1) {
            const klass = (idx === this.state.selectedPicture) ? "thumbnail-li thumb-selected" : "thumbnail-li"
            pictures.push(<li key={idx} className={klass} onClick={() => this.setState({selectedPicture: idx})}><img className="thumbnail" src={this.product.productPictures[`${idx}`]} alt={`${this.product.title} thumbnail`} /></li>);
        }
    
        return pictures;
    }

    render() {

        let content;

        if (!(this.props.products[this.props.productId])) {
            content = this.product;

        } else {

            this.product = this.props.products[this.props.productId];
            this.pictures = this.picturesArray();
            content = (
                <div className="product-show-component">


                    <div className="left-col-66">   

                        <div className="image-box">
                            <button className="previous-picture" onClick={() => this.setState({ selectedPicture: Math.abs((this.state.selectedPicture - 1) % this.pictures.length ) })}><i className="fas fa-angle-left"/></button>
                            <img className="display-image" src={this.product.productPictures[this.state.selectedPicture]} alt=""/>
                            <button className="next-picture" onClick={() => this.setState({ selectedPicture: ((this.state.selectedPicture + 1) % this.pictures.length) })}><i className="fas fa-angle-right"></i></button>
                        </div>

                        <ul className="product-pictures-ul">
                            {this.pictures}
                        </ul>

                        {/* CHANGE THIS MAYBE A BOX POINTING TO THE USERS PROFILE INSTEAD OF ASKING A ? */}

                        <section className="product-description-box">
                            <h3 className="description-header">Description</h3>
                            {/* <div className="outer-description">
                                <input type="checkbox" id="readmore-label" />
                                <div className="inner-description">
                                    { this.product.description }
                                </div>
                                <br/>
                                <label htmlFor="readmore-label" className="readmore-label">  </label>
                            </div> */}
                            <p className="product-description">{this.product.description}</p>
                        </section>

                    </div>
                    <div className="right-col-33">

                        <div className="buy-box">
                            <header className="shop-name">{this.props.merchant.shop_name}</header>
                            <h1 className="product-title">{this.product.title}</h1>
                            <div className="product-price">${this.product.price.toFixed(2)}</div>
                            <div className="buy-quantity">
                                <label className="quantity-label">Quantity:</label>
                        
                                {/* CHANGE THIS TO ACCOUNT FOR ACTUAL PRODUCT STOCK */}
                                <select className="quantity-select" type="select">
                                    <option value="1" defaultValue="">1</option>
                                    {this.selectOptions(20)}
                                </select>

                            </div>
                            <button className="buy-now">Buy it now</button>
                            <button className="black-button cart-add">Add to Cart</button>

                            {/* CHANGE THIS WHEN SHOPPING CART ITEMS IS POPULATED */}
                            {/* <span className="demand"><i className="fas fa-shopping-cart"></i>Other people want this. </span> */}
                        </div>

                        <div className="product-overview-box">
                            <h3 className="product-overview-h3">Overview</h3>
                        </div>
                        <div className="shipping-returns-box">
                            <h3 className="shipping-returns-h3">Shipping and Returns</h3>
                        </div>
                        <div className="merchant-listings-box">
                            <h3 className="merchant-listings-h3">{this.props.merchant.shop_name}</h3>
                        </div>
                    </div>
                </div>
            )
        }

        return content;
    }
}

export default ProductShow;