import React from 'react';







export default class PageLogin extends React.Component{



	render(){
		
		return (<div className="login-container">
			<h1>Hello World From Page Login.</h1>
		</div>);
	}



}

PageLogin.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}