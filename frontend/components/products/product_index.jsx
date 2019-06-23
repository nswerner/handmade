import React from "react";
import ProductIndexItem from "./product_index_items";

 
class ProductIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            sliceStart: 0,
            sliceEnd: 12,
            totalPages: null,
            loading: true
        }

        this.getProducts = this.getProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
    }
    
    /////////

    getProducts() {
        this.setState({ loading: true });
        this.props.fetchProducts().then( () => {
            this.setState({ loading: false, totalPages: Math.ceil(Object.values(this.props.products).length / 12 )})
        }); 
        this.setState({ page: this.state.page + 1 });
    }

    firstPage() {
        this.setState({
            page: 2,
            sliceStart: 0,
            sliceEnd: 12
        })
    }

    nextPage() {
        if (this.state.page === this.totalPages + 1) {
            return null;
        }

        this.getProducts();
        this.setState({ page: this.state.page + 1, sliceStart: this.state.sliceStart + 12, sliceEnd: this.state.sliceEnd + 12 });
    }

    previousPage() {
        if (this.state.page === 2) {
            return null;
        }

        this.setState({ page: this.state.page - 1, sliceStart: this.state.sliceStart - 12, sliceEnd: this.state.sliceEnd - 12 });
    }


    //////////

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.searchTerm !== prevProps.searchTerm) {
            this.setState({
                page: 2,
                sliceStart: 0,
                sliceEnd: 12
            });
        }
    }
    
    filterProducts() {
        this.filteredProducts = _.filter(this.props.products, product => product.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
        this.filteredProductObject = {};
        for (let idx = 0; idx < this.filteredProducts.length; idx += 1) {
            this.filteredProductObject[this.filteredProducts[idx].id] = this.filteredProducts[idx];
        }
    }

    render() {

        this.filterProducts();

        if (this.state.loading) {
            return (
                null
            )
        }

        if (this.state.page > 2) {
            this.start = <button className="start-button" onClick={this.firstPage}> Back to start </button>
        } else {
            this.start = null;
        } 

        if (Object.keys(this.filteredProductObject).length === 0) {
            return (
                <div className="bad-search">
                    <h4>
                        Sorry, no products could be found with that title. Check your spelling or try searching for another product!
                    </h4>
                </div>
            )
        }

        this.productArray = Object.values(this.filteredProductObject);
        this.productsSlice = this.productArray.slice(this.state.sliceStart, this.state.sliceEnd);

        this.products = this.productsSlice.map( product => {
            return (
               <ProductIndexItem
                    product={product}
                    key={product.id}
                    merchant={this.props.users[product.merchant_id]}
               />
            );
        });
        

        this.totalPages = Math.ceil(Object.keys(this.filteredProductObject).length / 12);


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
                        {/* <span className="page-x-of-y">Page {this.state.page - 1} of {this.state.totalPages} </span> */}
                        <span className="page-x-of-y">Page {this.state.page - 1} of {this.totalPages} </span>
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