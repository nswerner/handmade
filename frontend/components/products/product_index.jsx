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
            page: 1,
            sliceStart: 0,
            sliceEnd: 2,
            totalPages: null,
            loading: false
        }

        this.getProducts = this.getProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
    }
    
    /////////

    // CHANGE THIS TO DIVIDE BY 12
    getProducts() {
        this.setState({ loading: true });
        this.props.fetchProducts().then( () => {
            this.setState({ loading: false, totalPages: Math.ceil(Object.values(this.props.products).length / 2 )})
        }); 
        this.setState({ page: this.state.page + 1 });
    }

    firstPage() {
        this.setState({
            page: 2,
            sliceStart: 0,
            sliceEnd: 2
        })
    }

    // CHANGE THIS INCREMENT TO 12 
    nextPage() {
        if (this.state.page === this.state.totalPages + 1) {
            return null;
        }

        this.getProducts();
        this.setState({ page: this.state.page + 1, sliceStart: this.state.sliceStart + 2, sliceEnd: this.state.sliceEnd + 2 });
    }

    // CHANGE THIS DECREMENT TO 12
    previousPage() {
        if (this.state.page === 2) {
            return null;
        }

        this.setState({ page: this.state.page - 1, sliceStart: this.state.sliceStart - 2, sliceEnd: this.state.sliceEnd - 2 });
    }


    //////////

    componentDidMount() {
        this.getProducts();
    }  

    render() {

        // if (this.state.loading) {
        //     return (
        //         <div className="loading">Loading</div>
        //     )
        // }

        if (this.state.page > 2) {
            this.start = <button className="start-button" onClick={this.firstPage}> Back to start </button>
        } else {
            this.start = null;
        } 

        this.productArray = Object.values(this.props.products);
        this.productsSlice = this.productArray.slice(this.state.sliceStart, this.state.sliceEnd);

        this.products = this.productsSlice.map( product => {
            return (
               <ProductIndexItem
                    product={product}
                    key={product.id}
               />
            );
        });
        




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
                        <span className="page-x-of-y">Page {this.state.page - 1} of {this.state.totalPages} </span>
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