'user strict';

import React from 'react';
import jQuery from 'jquery';
import CryptoJS from 'crypto-js';


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
		  success: (callback) => {
		  	let cookie = this._getCookie('oss');
		  	this._decryptToken(cookie, callback.id);
		  	window.location.replace('/courses');
		  }
		});
	}

	componentWillMount(){
		this._login();
	}

	_decryptToken(token, id){
		// Decrypt 
		var bytes  = CryptoJS.AES.decrypt(token.toString(), 'this is the token');
		var json = bytes.toString(CryptoJS.enc.Utf8);
		this._setSessionStorage(json, id);
	}

	_setSessionStorage(json, id){
		let obj = JSON.parse(json);
		sessionStorage.setItem('oss-id', id);
		sessionStorage.setItem('oss-email', obj.email);
		sessionStorage.setItem('oss-role', obj.role);
		sessionStorage.setItem('oss-first_name', obj.first_name);
		sessionStorage.setItem('oss-last_name', obj.last_name);
	}


	_getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length,c.length);
	        }
	    }
	    return "";
	}
}