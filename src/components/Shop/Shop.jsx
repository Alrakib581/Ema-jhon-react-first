import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    // console.log(products);
    const addToCart =(product) =>{
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                 products.map(product => <Product
                     name={product.name}
                     img={product.img}
                     price={product.price}
                     seller={product.seller}
                     ratings={product.ratings}
                     id={product.id}
                     key={product.id}
                     addToCart={addToCart}
                     >
                 </Product>)

                }
            </div>
            <div className="cart-container">
                <h2 className='summary-heading'>Ordered summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;