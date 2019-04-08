import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product, merchant }) => {


    return (
        <li className="index-item-li">
            <Link className="item-box" to={`/products/${product.id}`}>
                <img className="item-image" src={product.productPictures[0]} alt={product.title}/>
                <h2 className="item-title">{product.title}</h2>
                <span className="item-merchant">{merchant.shop_name}</span>
                <br/>
                <span className="item-price">${product.price.toFixed(2)}</span>
            </Link>&nbsp;
        </li>);
};

export default ProductIndexItem;



