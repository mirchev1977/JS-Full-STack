'user strict';

import React from 'react';
import jQuery from 'jquery';
import User from '../entities/user';


export default class PageUsers extends React.Component{


	constructor(){
		super();

		this.state = {
			users: [],
			isCreatingNew: false,
			isFilteredByUser: false
		};

		this._timer;
	}

	render(){
		let users;
		users = this._getUsers();
		return (
			<div className="userContainer">{users}</div>
			);
	}

	_getUsers(){
		return this.state.users.map((user) => 
		{ return <User userId={user.id} onDelete = {this._deleteUser.bind(this)}
		firstName={user.first_name} onChange={this._handleFieldChange.bind(this)} key={user.id} />});
	}

	componentWillMount() {
		this._fetchUsers();
	}

	componentDidMount() {

		this._timer= setInterval(
		() => this._fetchUsers(),
		5000);

	}

	componentWillUnmount() {
		clearInterval(this._timer);
	}



	_fetchUsers() {
		let url;
		url = '/api/users';

		jQuery.ajax({
		  method: 'GET',
		  url: url,
		  success: (users) => {
		    this.setState({users});
		  }
		});
	}

	_deleteUser(userId){
		let users = this.state.users.filter(function(user){
			return user.id !== userId;
		});

		this._deleteUserDb('/api/users/' + userId);

		this.setState({users: users});
	}


	_deleteUserDb(url) {
		jQuery.ajax({
		  method: 'DELETE',
		  url: url,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
		  success: () => {
		    this._fetchUsers();
		  }
		});
	}



	_handleFieldChange(userId, userText){
		let users = this.state.users;
		users = users.slice();
		let current = users[userId];
		users[userId] = current;
		this.setState({users});
		this._updateUserDb('/api/users/' + userId + '/edit-admin', 
			userText, current.last_name, current.email, current.role);
	}

	_updateUserDb(url, firstName, lastName, email, role) {
		jQuery.ajax({
		  method: 'PUT',
		  url: url,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
            data: "first_name=" + firstName + 
            "&last_name=" + lastName + "&email=" + email + "&role=" + role,
		  success: () => {
		  }
		});
	}

}