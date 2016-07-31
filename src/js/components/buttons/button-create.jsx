'user strict';

import React from 'react';

//receives function createNew
export default class ButtonDelete extends React.Component{

	//receives function createNew
	render(){
		return(
			<button className="deleteButton" onClick = {this._createNew.bind(this)}>Create New Course</button>
		);
	}


	//receives function createNew
	_createNew() {
    	this.props.createNew();
  	}


}