import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPicture: 0,
            selectedQuantity: 1
        }

        this.product = null;
        this.selectOptions = this.selectOptions.bind(this);
        this.picturesArray = this.picturesArray.bind(this);
        this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.filterReviews = this.filterReviews.bind(this);
    }

    componentDidMount() {
        this.props.clearSearch();
        this.props.fetchProduct(this.props.productId);
        this.props.fetchReviews(this.props.productId);
    }


    componentDidUpdate(oldProps) {
        if (this.props.match.params.id !== oldProps.match.params.id) {
            this.props.fetchProduct(this.props.match.params.id);
        }
    }

    selectOptions(stock) {
        const options = [];

        for (let idx = 1; idx <= stock; idx += 1) {
            options.push(<option key={idx} value={idx}>{idx}</option>);
        }

        return options;
    }

    handleQuantitySelect(event) {
        this.setState({selectedQuantity: parseInt(event.target.value)});
    }

    picturesArray() {
        const pictures = [];

        for (let idx = 0; idx < this.product.productPictures.length; idx += 1) {
            const klass = (idx === this.state.selectedPicture) ? "thumbnail-li thumb-selected" : "thumbnail-li"
            pictures.push(<li key={idx} className={klass} onClick={() => this.setState({selectedPicture: idx})}><img className="thumbnail" src={this.product.productPictures[`${idx}`]} alt={`${this.product.title} thumbnail`} /></li>);
        }
    
        return pictures;
    }

    addToCart() {
        let cartItem = {product_id: this.props.productId, quantity: this.state.selectedQuantity};
        this.props.createCartItem(this.props.currentUser, cartItem);
        this.props.ownProps.history.push('/myCart');
    }

    filterReviews(prodID) {
        this.reviews = this.props.reviews.filter( review => {
            return review.product_id === parseInt(prodID);
        })
        return this.reviews;
    }

    createReviewLIs() {
        if (this.props.reviews.length === 0) {
            this.reviews = null;
        } else {
            this.reviews = this.filterReviews(this.props.productId);
            this.reviews = this.reviews.map((review, idx) => {
                return (
                    <li className="review-li" key={`review${idx}`}>
                        <div className="review-box">
                            <header className="review-header">
                                <h3 className="review-email">{this.props.users[review.user_id].email}</h3>
                                {/* <h4 className="review-date">{review.dateCreated}</h4> */}
                            </header>
                            <div className="review-rating">
                                {review.rating}
                            </div>
                            <div className="review-body">
                                {review.body}
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }

    createMyReview() {

        for (let idx = 0; idx < this.props.reviews.length; idx += 1) {
            if (this.props.currentUser.id === this.props.reviews[idx].user_id) {
               this.myReview = <div className="my-review">
                    <h4 className="review-form-header"> My Review </h4>
                    {this.reviews[idx]}
                </div> 
               this.reviews.splice(idx, 1);
               return;
            }
        }

       return this.myReview = <textarea className="review-textarea" id="" cols="30" rows="10"></textarea>
    }

    render() {

        this.createReviewLIs();
        this.createMyReview();
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

                        <section className="product-description-box">
                            <h3 className="description-header">Description</h3>

                            <p className="product-description">{this.product.description} Every product on Handmade is made by real people just like you. 
                            </p>
                        </section>

                        <section className="product-reviews-box">
                            <h3 className="reviews-header">Reviews</h3>
                            <div className="review-form">
                                
                                {this.myReview}
                            </div>
                            <ul className="reviews-ul">
                                {this.reviews}
                            </ul>
                        </section>

                    </div>
                    <div className="right-col-33">

                        <div className="buy-box">
                            <header className="shop-name">{this.props.merchant.shop_name}</header>
                            <h1 className="product-title">{this.product.title}</h1>
                            <div className="product-price">${this.product.price.toFixed(2)}</div>
                            <div className="buy-quantity">
                                <label className="quantity-label">Quantity:</label>
                        
                                <select className="quantity-select" type="select" defaultValue={1} onChange={() => this.handleQuantitySelect(event)}>
                                    {this.selectOptions(20)}
                                </select>

                            </div>
                            {/* <button className="buy-now">Buy it now</button> */}
                            <button className="black-button cart-add" onClick={this.addToCart}>Add to Cart</button>

                        </div>

                        <div className="shipping-returns-box">
                            <h3 className="shipping-returns-h3">Shipping and Returns</h3>
                            <div className="shipping-paragraph-box">
                                <i className="fas fa-shipping-fast"></i>
                                <p className="shipping-paragraph">
                                    Free Shipping within the continental U.S.
                                    Made to Order items are ready to ship within in 1 - 2 weeks.
                                    No exchanges or returns.
                                </p>
                            </div>
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