import React from 'react';

export default class ButtonSubscribe extends React.Component{

	//receives function createNew
	render(){
		return(
			<button className="buttonSubscribe" onClick = {this._handleClick.bind(this)}>Subscribe</button>
		);
		
	}


	_handleClick() {
    	this.props.subscribeUser(this.props.courseId);
    	this.props.handleSubscribe();
  	}


}