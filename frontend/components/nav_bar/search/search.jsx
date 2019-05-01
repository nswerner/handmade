import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyDisplayed: this.props.storeProducts,
            searchTerm: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(event) {
        let filteredProducts = _.filter(this.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        let filteredProductObject = {};
        for (let idx = 0; idx < filteredProducts.length; idx += 1) {
            filteredProductObject[filteredProducts[idx].id] = filteredProducts[idx];
        }
        
        this.setState({searchTerm: event.target.value, currentlyDisplayed: filteredProductObject});
        this.props.filterProducts(filteredProductObject);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.allProducts && Object.keys(this.props.allProducts).length >= 23) {
            this.allProducts = this.props.allProducts;
        }
    }

    render() {
        return(
            <div className="search-bar-and-button">
                <input onChange={this.handleInput} value={this.state.searchTerm} className="search-bar" type="search"/>
                <button className="search-button">Search</button>
            </div>
        )
    }
}

export default Search;
