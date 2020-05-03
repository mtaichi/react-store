import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './components/Home';
import ProductList from './components/products';
import ProductDetail from './components/product-detail';
import Cart from './cart';
import NavBar from './components/NavBar';
import Default from './components/default';
import Modal from './components/modal';

function App() {
	return (

		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route path="/products" component={ProductList} />
				<Route path="/detail" component={ProductDetail} />
				<Route path="/cart" component={Cart} />
				<Route component={Default} />
			</Switch>
			 <Modal/>
		</Router>
	);
}


export default App;
