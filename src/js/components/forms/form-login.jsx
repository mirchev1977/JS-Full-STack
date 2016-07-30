import React from 'react';
import jQuery from 'jquery';


export default class FormLogin extends React.Component{


	render(){
		return (<div className="form-login">
			<h1>Hello World From The Login Form.</h1>
			<form onSubmit={this._handleSubmit.bind(this)} >
				<div className="field-input">
				<label>Email:
				<input type="text" ref={(input) => this._email = input} /></label></div>
				<div className="field-input">
				<label>Password:
				<input type="password" ref={(input) => this._password = input} /></label></div>
				<input type="submit" value="Submit" />
			</form>
		</div>);
	}


	_handleSubmit(event){
		event.preventDefault();
		let email = this._email.value;
		let password = this._password.value;
		this._login(email, password);
	}

	_login(email, password){
		jQuery.ajax({
		  method: 'POST',
		  url: '/api/users/login',
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
            data: "email=" + email + "&password=" + password,
		  success: () => {
		  	window.location.replace('/courses');
		  }
		});
	}

	componentWillMount(){
		this._login();
	}
}