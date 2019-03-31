import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
    return (
        <li>
            <Link className="item-box" to={`/products/${product.id}`}>
                <img className="item-image" src={product.product_pictures[0]} alt={product.title}/>
                <h2 className="item-title">{product.title}</h2>
                <span className="item_merchant">{product.merchant_id}</span>
                <span className="item-price">{product.price}</span>
            </Link>&nbsp;
        </li>);
};

export default ProductIndexItem;