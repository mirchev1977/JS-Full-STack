import React from 'react';
import DeleteButton from './button-delete';

//receives courseId and courseName
export default class CourseTeacher extends React.Component{
	
	//receives courseId and courseName
	render(){
		return(
			<div className="courseContainer"><p className="courseName">{this.props.courseName}</p>
			<DeleteButton id={this.props.courseId} onDelete={this.props.onDelete} /></div>
		);
	}
}