import React from  "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

export default function NavBar(){
	return (
		
		 <Navigate>
        <ul className="nav">
          <li className="nav-item">
           <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact </Link>
          </li>
          <li className="nav-item">
             <Link to="cart" className="btn btn-link float-right">Cart</Link> 
          </li>
        </ul>
        </Navigate>
		
	) 
	
}

const Navigate = styled.div`
background:var(--mainDark);
`
