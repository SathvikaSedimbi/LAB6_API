import React from "react";

export default function ProductList({products}){

    return(

        <div className="product-grid">

            {products.map(product => (

                <div key={product.id} className="product-card">

                    <img 
                        src={product.thumbnail}
                        alt={product.title}
                        className="product-img"
                    />

                    <h4>{product.title}</h4>

                    <p className="price">💸 {product.price}</p>

                </div>

            ))}

        </div>

    )

}