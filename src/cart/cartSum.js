import React from "react";
import {ProductConsumer} from './../context';
import PaypalButton from './PayPalButton';

export default class CartSum extends React.Component{
	render(){
		//const history = this.props.history;
		//console.log(history);
		return (
			
			<ProductConsumer>
			{(value)=>{
				const {sumTax,subTotal,total,clearCart}=value;
				return(
					<div className="container">
				<div className="row">	
				 
				<div className="col-10  mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
				<button className="btn btn-outline-danger text-uppercase mb-3 mx-5" onClick={()=>{clearCart()}}>Clear Cart</button>
				 <h5>
			      <span className="text-title">Sub Total: </span>
<strong>${subTotal}</strong>
</h5>
				  <h5>
			      <span className="text-title">Total tax: </span>
              <strong> ${sumTax} </strong>
</h5>
		        <h5>
			      <span className="text-title">Total: </span>
              <strong>  ${total}</strong>
				</h5>
				<PaypalButton total={total} history={this.props.history}  clearCart={clearCart} />
			    </div>
				</div>
				</div>);
			}}
			</ProductConsumer>
			
		)
	}
}