import React from 'react';
import DeleteButton from './button-delete';

//receives courseId and courseName
export default class CourseTeacher extends React.Component{
	render(){
		return(
			<div className="courseContainer"><p className="courseName">{this.props.courseName}</p>
			<DeleteButton /></div>
		);
	}
}