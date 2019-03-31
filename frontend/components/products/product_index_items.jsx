import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
    return (
        <li>
            <Link to={`/products/${product.id}`}>
                {product.title}
                <img src={product.product_pictures[0]} alt=""/>
            </Link>&nbsp;
        </li>);
};

export default ProductIndexItem;