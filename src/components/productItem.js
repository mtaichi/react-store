import React,{Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default class ProductItem extends Component {
	 
	 render(){
		const {img,title,id,price,inCart} = this.props.product;
		const {addToCart,handleDetail} = this.props.value;
		console.log("product is"+title);
		let btnCart ;
		  if(inCart===true){
			btnCart= <span className="btn btn-success">In Cart</span>
		}else{
			btnCart= (<button className="btn btn-primary" onClick={()=>{addToCart(id)}}>add to cart</button>);
		}
	
		
	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
			
			<div className="image-container p-3">
<Link to="detail">	       
 <img src={img} alt={title} className=" card-img-top" 
onClick={()=>{
	handleDetail(id);
	
	}}/>
	</Link>
	</div>
	
	      {btnCart}
			</div>
			<div className="card-footer">
                <span className="d-inline">{title}</span>
                 <span className="float-right"><strong>$</strong>{price}</span>
			</div>
          
		</ProductWrapper>
	)
	}
}

const ProductWrapper = styled.div`
.card{
	border-color:transparent;
	transition:all 1s linear;
	
}
.card-footer{
	background:transparent;
	border-top:transparent;
	transation:all 1s linear;
}
&:hover{
	  .card{
		border:0.04rem solid rgba(0,0,0,0.2);
		box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
		
	}
	.card-footer{
		background:rgba(247,247,247);
	}
	
}
.image-container{
	position:relative;
	overflow:hidden;
}
.card-img-top{
	transition:all 1s ease-in-out;
	
	
	
}
.image-container:hover .card-img-top{
	transform:scale(1.2);
}
`
