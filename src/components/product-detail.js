import React from 'react';
import {ProductConsumer} from "./../context";
import {Link} from "react-router-dom";

export default function ProductDetail(product){
    return (
    <ProductConsumer>
     {(value)=>{
	  const {id,title,img,info,price,company,inCart} = value.detail;
      return (<div>
      <img src={img} alter={title} className="float-left"/>
      <div className="info">
      <h2>{title}</h2>
       <h3>{company}</h3>
      <p>{info}</p>
      <span><strong>$</strong>{price}</span>
      <button className="btn btn-primary">Add to Cart</button> 
      <Link to="/">Back to Shop</Link>     
</div>
</div>);
}}
     </ProductConsumer>	
);
}