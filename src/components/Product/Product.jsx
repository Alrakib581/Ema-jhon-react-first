import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {img,name,price, seller, ratings,id} = props;
    const addToCart = props.addToCart
    // console.log(addToCart)

    return (
        <div className='card'>
           <img src={img} alt="" />
            <div className='card-body'>
                <div>
                    <p>{name} <br />
                    <span>Price: ${price}</span> </p>
                </div>
                <div>
                    <p>Manufacturer: {seller} <br />
                    <span>Rating: {ratings}</span> </p>
                </div>
            </div>
            <button onClick={()=>addToCart(props)}>Add to Cart &nbsp;
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;