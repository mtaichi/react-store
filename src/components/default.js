import React from "react";
export default class  Default extends React.Component{
	
	
	render(){
		const props= this.props;
		//console.log(props);
		return (
<React.Fragment>
 <div className="container">
   <div className="row">
      <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
     <h1 className="display-3">404</h1> 
      <h2>The requested URL  
<span className="text-danger"> {props.history.location.pathname} </span>
  is not found!</h2>      
</div>
   </div>
</div>

</React.Fragment>
)
	}
	
}