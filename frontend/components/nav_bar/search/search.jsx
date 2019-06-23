import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyDisplayed: this.props.storeProducts,
            searchTerm: this.props.searchTerm,
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick(event) {
        if (this.props.loggedIn === false) {
            this.props.openModal();
            return;
        }


        let filteredProducts = _.filter(this.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        let filteredProductObject = {};
        for (let idx = 0; idx < filteredProducts.length; idx += 1) {
            filteredProductObject[filteredProducts[idx].id] = filteredProducts[idx];
        }

        this.props.history.push("/products");
        this.props.filterProducts(filteredProductObject);
    }

    handleKeyPress(event) {


        if (event.key === "Enter") {

            if (this.props.loggedIn === false) {
                this.props.openModal();
                return;
            }

            let filteredProducts = _.filter(this.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
            let filteredProductObject = {};

            for (let idx = 0; idx < filteredProducts.length; idx += 1) {
                filteredProductObject[filteredProducts[idx].id] = filteredProducts[idx];
            }


            this.props.history.push('/products');
            this.props.filterProducts(filteredProductObject);
        }
    }

    handleInput(event) {
        let filteredProducts = _.filter(this.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        let filteredProductObject = {};
        for (let idx = 0; idx < filteredProducts.length; idx += 1) {
            filteredProductObject[filteredProducts[idx].id] = filteredProducts[idx];
        }
        
        this.props.appendSearch(event.target.value);
        this.setState({ currentlyDisplayed: filteredProductObject});

        if (this.props.location.pathname ===  "/products") {
            this.props.filterProducts(filteredProductObject);
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.allProducts && Object.keys(this.props.allProducts).length >= 23) {
            this.allProducts = this.props.allProducts;
        }
    }

    render() {
        return(
            <div className="search-bar-and-button">
                <input onKeyPress={this.handleKeyPress} onChange={this.handleInput} value={this.props.searchTerm} className="search-bar" type="search"/>
                <button  onClick={this.handleClick} className="search-button">Search</button>
            </div>
        )
    }
}

export default Search;
