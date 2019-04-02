import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId)
    }


    render() {

        return (
            <div>
                Hello from the product show component
            </div>
        )
    }
}

export default ProductShow;