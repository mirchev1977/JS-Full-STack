'user strict';

import React from 'react';

//receives id, function onEdit, function changeState
export default class ButtonEdit extends React.Component{

	//receives id, function onEdit, function changeState
	render(){
		return(
			<button className="editButton" onClick = {this._handleEdit.bind(this)}>Edit</button>
		);
	}


	//receives id, function onEdit, function changeState
	_handleEdit() {
    	this.props.onEdit();
  	}


}