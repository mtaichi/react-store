import React ,{Component} from "react";
import CartList from "./cartList";
import EmptyCart from "./emptyCart";
import CartColumn  from "./cartColumn";
import CartSum from './cartSum';
import {ProductConsumer} from './../context';


export default class Cart extends Component{
	
	render(){
		
		return (
			
			
			<ProductConsumer>
			{value => {
				       if(value.cart.length>0){
					return (
						<React.Fragment>
						 <CartColumn />
						 <CartList cart={value.cart} value={value} />
						 <CartSum history={this.props.history}/>
					   </React.Fragment>
						)
					}else{
						return <EmptyCart />
					}
				
			}
			
			}
			
			</ProductConsumer>
			
		
		)
		
	}
}