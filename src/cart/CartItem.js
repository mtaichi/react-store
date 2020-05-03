import React from "react";

export default function CartItem({product,value}){
	const {id,title,img,price,count,total} = product;
	const {increment,decrement,deleteItem} =value;
	//console.log(this.props.history);
	return (
		<React.Fragment>
		 <div className="col-10 mx-auto col-lg-2">
	      <img src={img} alt={title} className="img-fluid"/>
	     </div>
        <div className="col-10 mx-auto col-lg-2">
       {title}
       </div>
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>
       {price}
       </div>
       <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
         <div className="d-flex justify-content-center">
         <div>
         <span className="btn btn-black mx-1" onClick={()=>{decrement(id)}} >-</span>
         <span className="btn btn-black mx-1">{count}</span>
         <span className="btn btn-black mx-1" onClick={()=>{increment(id)}}> +</span>
           </div>
         </div>
       </div>
   <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
         <i class="fas fa-trash"></i>
        </div>
       <button onClick={()=>{deleteItem(id)}}>delete</button>
       </div>
 <div className="col-10 mx-auto col-lg-2">
       <strong><span className="d-lg-none">Item total:</span> ${total}</strong>
       </div>
		</React.Fragment>
	)
}