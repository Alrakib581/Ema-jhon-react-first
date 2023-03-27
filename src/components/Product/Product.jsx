import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    return (
        <div className='card'>
            <p className='img-container'><img src={props.img} alt="" /></p>
            <div className='card-body'>
                <div>
                    <p>{props.name} <br />
                    <span>Price: ${props.price}</span> </p>
                </div>
                <div>
                    <p>Manufacturer: {props.seller} <br />
                    <span>Rating: {props.ratings}</span> </p>
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;