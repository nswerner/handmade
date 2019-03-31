import React from "react";
import ProductIndexItem from "./product_index_items";


// SOME NOTES - 
    // NEED TO ADD LOGIC FOR FIRST AND LAST PAGE STOPS
    // NEED TO STOP THE GETPRODUCTS CALL WHEN STATE IS FULLY LOADED

    // REFACTOR PAGES USING CONTROLLER KAMINARI BUILT IN METHODS AND PASS AS PROPS
    

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);

        // CHANGE THIS DEFAULT STATE TO sS: 0, sE: 11
        this.state = {
            nextPreloadedPage: 1,
            viewPage: 1,
            sliceStart: 0,
            sliceEnd: 2
        }

        this.getProducts = this.getProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
    }
    
    /////////

    getProducts() {
        this.props.fetchProducts(this.state.nextPreloadedPage);
        this.setState({ nextPreloadedPage: this.state.nextPreloadedPage += 1 });
    }

    firstPage() {
        this.setState({
            nextPreloadedPage: this.state.nextPreloadedPage,
            viewPage: 1,
            sliceStart: 0,
            sliceEnd: 2
        })
    }

    // CHANGE THIS INCREMENT TO 12 
    nextPage() {
        this.getProducts();
        this.setState({ nextPreloadedPage: this.state.nextPreloadedPage, viewPage: this.state.viewPage += 1, sliceStart: this.state.sliceStart += 2, sliceEnd: this.state.sliceEnd += 2 });
    }

    // CHANGE THIS DECREMENT TO 12
    previousPage() {
        this.setState({ nextPreloadedPage: this.state.nextPreloadedPage, viewPage: this.state.viewPage -= 1, sliceStart: this.state.sliceStart -= 2, sliceEnd: this.state.sliceEnd -= 2 });
    }


    //////////

    componentDidMount() {
        this.getProducts();
        this.getProducts();
    }  

    render() {

        this.productArray = Object.values(this.props.products).filter( (value, idx, productArray) => {
            return value != "totalPages";
        });
        
        this.productsSlice = this.productArray.slice(this.state.sliceStart, this.state.sliceEnd);
        this.products = this.productsSlice.map( product => {
            return (
               <ProductIndexItem
                    product={product}
                    key={product.id}
               />
            );
        });
        
        if (this.state.viewPage > 1) {
            this.start = <button className="start-button" onClick={this.firstPage}> Back to start </button>
        } else {
            this.start = null;
        } 


        return (
            <div className="product-index">
                <header className="product-index-main-header">
                    <header className="product-index-subheader">
                        <h1 className="product-index-subheader-h1">
                            Handpicked for you
                        </h1>
                    </header>
                    <nav className="index-page-nav">
                        {this.start}
                        <span className="page-x-of-y">Page {this.state.viewPage} of {this.props.products.totalPages} </span>
                        <button className="previous-page-button" onClick={this.previousPage}><i className="fas fa-angle-left"></i></button>
                        <button className="next-page-button" onClick={this.nextPage}><i className="fas fa-angle-right"></i></button>
                    </nav>
                </header>
                <ul className="product-index-ul">
                    {this.products}
                </ul>
            </div>
        );
    }
}

export default ProductIndex;