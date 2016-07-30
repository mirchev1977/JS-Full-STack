import React from 'react';

export default class ButtonMyClassRoom extends React.Component{

	render(){
		return(
			<button className="myClassRoomButton" 
			onClick = {this._handleFilter.bind(this)}>My Class Room</button>
		);
	}


	_handleFilter() {
    	this.props.toMyClassRoom();
  	}


}