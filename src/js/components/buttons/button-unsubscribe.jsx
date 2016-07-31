'user strict';

import React from 'react';

export default class ButtonUnsubscribe extends React.Component{

	render(){
		return(
			<button className="deleteButton" onClick = {this._handleClick.bind(this)}>Unsubscribe</button>
		);
		
	}


	_handleClick() {
    	this.props.unsubscribeUser(this.props.courseId);
  	}


}