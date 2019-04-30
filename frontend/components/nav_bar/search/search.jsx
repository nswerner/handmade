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
        debugger
        let filteredProducts = _.filter(this.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({searchTerm: event.target.value, currentlyDisplayed: filteredProducts});
        this.props.filterProducts(filteredProducts);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.allProducts && Object.keys(this.props.allProducts).length >= 23) {
            this.allProducts = this.props.allProducts;
        }
    }

    render() {
        debugger
        return(
            <div className="search-bar-and-button">
                <input onChange={this.handleInput} value={this.state.searchTerm} className="search-bar" type="search"/>
                <button className="search-button">Search</button>
            </div>
        )
    }
}

export default Search;
