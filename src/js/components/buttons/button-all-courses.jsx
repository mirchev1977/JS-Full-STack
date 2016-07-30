import React from 'react';

export default class ButtonAllCourses extends React.Component{

	render(){
		return(
			<button className="myClassRoomButton" 
			onClick = {this._handleFilter.bind(this)}>All Courses</button>
		);
	}


	_handleFilter() {
    	this.props.removeFilter();
  	}


}