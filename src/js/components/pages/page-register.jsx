'user strict';

import React from 'react';
import jQuery from 'jquery';


export default class FormLogin extends React.Component{


	render(){
		return (<div className="form-login">
			<h1>Sign Up Form</h1>
			<form onSubmit={this._handleSubmit.bind(this)} >
				<div className="field-input">
				<label>First Name:
				<input type="text" ref={(input) => this._first_name = input} /></label></div>
				<div className="field-input">
				<label>Last Name:
				<input type="text" ref={(input) => this._last_name = input} /></label></div>
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
		let firstName = this._first_name.value;
		let lastName = this._last_name.value;
		let email = this._email.value;
		let password = this._password.value;

		jQuery.ajax({
		  method: 'POST',
		  url: '/api/users',
		  headers: {
                'Authorization': 'bearer U2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
            data: "first_name=" + firstName + "&last_name=" + lastName +  "&email=" + email + "&password=" + password,
		  success: () => {
		  	window.location.replace('/login');
		  }
		});
	}
}