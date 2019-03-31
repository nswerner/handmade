import React from "react";
import ProductIndexItem from "./product_index_items";


// SOME NOTES - 
    // NEED TO ADD LOGIC FOR FIRST AND LAST PAGE STOPS
    // NEED TO STOP THE GETPRODUCTS CALL WHEN STATE IS FULLY LOADED
    



class ProductIndex extends React.Component {
    constructor(props) {
        super(props);

        // CHANGE THIS DEFAULT STATE TO sS: 0, sE: 11
        this.state = {
            page: 1,
            sliceStart: 0,
            sliceEnd: 2
        }

        this.getProducts = this.getProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }
    
    getProducts() {
        this.props.fetchProducts(this.state.page);
        this.setState({ page: this.state.page += 1 });
    }

    // CHANGE THIS INCREMENT TO 12 
    nextPage() {
        debugger
        this.getProducts();
        this.setState({ page: this.state.page, sliceStart: this.state.sliceStart += 2, sliceEnd: this.state.sliceEnd += 2 });
    }

    // CHANGE THIS DECREMENT TO 12
    previousPage() {
        debugger
        this.setState({ page: this.state.page, sliceStart: this.state.sliceStart -= 2, sliceEnd: this.state.sliceEnd -= 2 });
    }

    componentDidMount() {
        this.getProducts();
        this.getProducts();
        debugger
    }  

    render() {

        const productArray = Object.values(this.props.products);
        const productsSlice = productArray.slice(this.state.sliceStart, this.state.sliceEnd);
        const products = productsSlice.map( product => {
            return (
               <ProductIndexItem
                    product={product}
                    key={product.id}
               />
            );
        });

        return (
            <div>
                <button onClick={this.previousPage}>Previous Page</button>
                <button onClick={this.nextPage}>Next Page</button>

                <ul>
                    {products}
                </ul>
            </div>
        );
    }
}

export default ProductIndex;