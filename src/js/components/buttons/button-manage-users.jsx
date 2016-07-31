'user strict';

import React from 'react';

export default class ButtonManageUsers extends React.Component{

	render(){
		return(
			<button className="manageUsersButton" onClick = {this._handleClick.bind(this)}>Manage Users</button>
		);
	}


	_handleClick() {
    	this.props.manageUsers();
  	}


}