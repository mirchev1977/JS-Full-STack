'user strict';

import React from 'react';
import FormLogin from '../forms/form-login';



export default class PageLogin extends React.Component{



	render(){
		
		return (<div className="login-container">
			<h1>Hello World From Page Login.</h1>
			<FormLogin />
		</div>);
	}



}

PageLogin.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}