import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {img,name,price, seller, ratings} = props;
    return (
        <div className='card'>
            <p className='img-container'><img src={img} alt="" /></p>
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
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;