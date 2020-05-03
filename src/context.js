import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();


class ProductProvider extends Component {

	state = {
		products: [],
		detail: detailProduct,
		cart: [],
		sumTax:0,
		subTotal:0,
		total:0,
		modalProduct:detailProduct,
		modalOpen:false,
	}
	
	componentDidMount = ()=>{
		this.setPrducts();
	}
	
	closeModal = ()=>{
		this.setState(()=>{
			return {modalOpen:false}
		})
	}
	
	showModal = (id)=>{
		const modalProduct = this.getItem(id);
		this.setState(()=>{
			return {
				modalOpen:true,
				modalProduct:modalProduct
			}
		})
	}
	
	setPrducts = ()=>{
		const tempProducts =JSON.parse(JSON.stringify(storeProducts));
		
		console.log(tempProducts);
		this.setState(()=>{
			
			return {products : tempProducts};
		}, console.log(this.state.products))
		
		
	}


	getItem = (id) => {
		const products = this.state.products;
		return products.find(product => { return product.id === id });
	};

	handleDetail = (id) => {
		this.setState(() => {
			return { detail: this.getItem(id) }
		})
	}
	
	increment = (id) => {
		
		
		let cartProducts= this.state.cart;
		let product=cartProducts.find((p)=>{return p.id==id})
		
		product.count =product.count +1;
		product.total = (product.price * product.count).toFixed(2);
		const index=cartProducts.indexOf(product);
		cartProducts[index]=product;
		
		
		this.setState(()=>{
			return {cart:cartProducts};
		},()=>{this.caculateSum()})
		
		
	}
	
	caculateSum =() =>{
		const cartProducts = this.state.cart;
		console.log(cartProducts);
		let subTotal=0;
		let taxTotal=0;
		let total =0;
		cartProducts.forEach((product)=>{
			console.log(product);
			subTotal = parseFloat(subTotal + product.total);
			taxTotal = parseFloat((taxTotal + product.total*0.05).toFixed(2));
			total = parseFloat(subTotal+taxTotal);
			//console.log(subTotal)
		})
		this.setState(()=>{
			return {subTotal:subTotal,sumTax:taxTotal,total:total}
		})
	}
	
	decrement = (id) =>  {
		let cartProducts= this.state.cart;
		let product=cartProducts.find((p)=>{return p.id==id})
		
		product.count =product.count - 1;
		product.total = product.price * product.count;
		
		
		const index=cartProducts.indexOf(product);
		cartProducts[index]=product;
		
		if(product.count==0){
		    cartProducts.splice(index,1);
		}
		
		this.setState(()=>{
			return {cart:cartProducts};
		},this.caculateSum())
	}

	addToCart = (id) => {
		/*let tempProducts = [...this.state.products];
		const product = this.getItem(id);
		product.inCart = true;
		const index = tempProducts.indexOf(product);
		tempProducts[index] = product;
		
		const cartProduct = {...product,...{count:1,total:product.price}};
		
		this.setState(() => {
			return {products: tempProducts,
			cart:[...this.state.cart,cartProduct]}
		},this.caculateSum())*/
		
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		
		this.setState(()=>{
			return {products:tempProducts,cart:[...this.state.cart,product]}
		},()=>{
			this.showModal(id);
			this.caculateSum()
			});
		
		

	}
	clearCart =()=>{
		this.setState(()=>{
		return {
				
				cart:[],
			    sumTax:0,
		        subTotal:0,
		        total:0
              }
		},
			   
()=>{
	this.setPrducts()
}

		)
	}
    deleteItem = (id)=>{
	 let cartProducts= [...this.state.cart];
     const product = cartProducts.find((p)=> p.id==id);
     const index = cartProducts.indexOf(product);

     cartProducts.splice(index,1);

     const tempPro = this.getItem(id);
     const storeproducts = [...this.state.products];
     const i = storeproducts.indexOf(tempPro);
     tempPro.inCart = false;
tempPro.count = 0;
tempPro.total = 0;
     storeproducts[i]=tempPro;
	 this.setState(()=>{
		return {products:storeproducts,cart:cartProducts}
	},()=>{this.caculateSum()})
	  
    }

	render() {

		return (
			<div>
				<ProductContext.Provider value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					increment:this.increment,
					decrement:this.decrement,
					clearCart:this.clearCart,
					deleteItem: this.deleteItem,
					closeModal:this.closeModal,
					
					
				}}>

					{this.props.children}
				</ProductContext.Provider>



			</div>

		)
	}
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }