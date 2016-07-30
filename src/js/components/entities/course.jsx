import React from 'react';
import FieldDisplay from '../fields/field-display-no-ed';

//receives courseId and courseName
export default class Course extends React.Component{

	//receives courseId and courseName
	render(){
		return (<div className="courseContainer">
		<FieldDisplay id={this.props.courseId} text={this.props.courseName} /></div>);
	}

}