import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "./../context";

export default function Modal(){
	return (
		<ProductConsumer>
		{(value)=>{
			const {modalOpen,closeModal,modalProduct} = value;
			const {title,id,img,price} = modalProduct;
			if(modalOpen===true){
				return(
					
					   <ModalWrapper>
		                <div className="container">
                       <div className="row">
		                <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5">
		                
                    <h5>Item added to cart</h5>
                        <img src={img} alt={title} className="img-fluid"/>
                       <h5>{title}</h5>
                       <h5 className="text-muted"> Price: ${price}</h5>
                        
                       
                         <Link to="/" className="btn btn-primary mr-md-3 mb-sm-3 mb-md-0 col-10 col-md-4" onClick={()=>{closeModal()}}>shopping</Link>
                         <Link to="/cart" className="btn btn-success col-10 col-md-4" onClick={()=>{closeModal()}}>Cart</Link>
                        
                      </div>
                       </div>
                      </div>
                       </ModalWrapper>
					
					
				)
			}
			
			
		}}
	   
</ProductConsumer>	
	)
	
} 

const ModalWrapper = styled.div`
  position:fixed;
  left:0;
   right:0;
   bottom:0;
   top:0;
   display:flex;
   align-items:center;
   justify-content:center;
   background:rgba(0,0,0,0.5);
  #modal{
	background:#fff;
}

`
                  
