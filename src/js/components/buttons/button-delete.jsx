import React from 'react';

//receives id
//receives function onDelete
export default class ButtonDelete extends React.Component{

	//receives id
	//receives function onDelete
	render(){
		return(
			<button className="deleteButton" onClick = {this._handleDelete.bind(this)}>Delete</button>
		);
	}


	//receives id
	//receives function onDelete
	_handleDelete() {
    	this.props.onDelete(this.props.id);
  	}



}