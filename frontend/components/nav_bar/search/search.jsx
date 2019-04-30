import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            currentlyDisplayed: this.props.allProducts,
            searchTerm: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    


    handleInput(event) {
        let filteredProducts = _.filter(this.props.allProducts, product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({searchTerm: event.target.value, currentlyDisplayed: filteredProducts});
        this.props.filterProducts(filteredProducts);
    }
    
    componentDidUpdate(prevProps, prevState) {
        
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
