import React from 'react';

export default class ButtonLogout extends React.Component{

	render(){
		return(
			<button className="logoutButton" onClick = {this._logout.bind(this)}>Logout</button>
		);
	}


	_logout() {
    	sessionStorage.removeItem('oss-email');
    	sessionStorage.removeItem('oss-first_name');
    	sessionStorage.removeItem('oss-id');
    	sessionStorage.removeItem('oss-last_name');
    	sessionStorage.removeItem('oss-role');
    	document.cookie = "oss=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  	}



}