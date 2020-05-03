import React ,{Component} from 'react';
import {storeProducts} from "./../data";
import ProductItem from "./../components/productItem";
import {ProductConsumer} from "./../context";
import Title from "./Title";

export default class ProductList extends Component{
	
	render(){
	return (
		<React.Fragment>
			<div className="p-5">
              <div className="container">
                <Title name="our" title="products"/>
			    <div className="row">
			    <ProductConsumer>
                 {(value) => {
	                 return value.products.map((product)=>{ 
		return <ProductItem product={product} value={value} key={product.id}/>
})
	
                }}
			  
			 </ProductConsumer>   
			</div>
			
         </div>
    </div>
		</React.Fragment>
		
	);
	
   }
}