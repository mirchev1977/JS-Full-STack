'user strict';

import React from 'react';

//receives id, function onSave
export default class ButtonEdit extends React.Component{

	//receives id, function onSave
	render(){
		return(
			<button className="saveButton" onClick = {this._handleSave.bind(this)}>Save</button>
		);
	}


	//receives id, function onSave
	_handleSave() {
    	this.props.onSave();
  	}


}