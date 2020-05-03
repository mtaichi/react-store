import React from "react";
import CartItem from "./CartItem";


export default function cartList({cart,value}){
	
	const {clearCart} = value;
	
	return (
		<div className="container-fluid text-center">
		 <div className="row">
		{cart.map(product => {
						return  <CartItem  product={product} value={value} key={product.id}/>
					})}
	     
       </div>
		</div>
	  )
	}

