import React from 'react';

//receives courseId and courseName
export default class Course extends React.Component{
	
	//receives courseId and courseName
	render(){
		return(
			<p className="courseName">{this.props.courseName}</p>
		);
	}
}