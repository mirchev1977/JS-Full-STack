import React from 'react';
import FieldDisplay from '../fields/field-display-no-ed';
import ButtonSubscribe from '../buttons/button-subscribe';

//receives courseId and courseName
export default class Course extends React.Component{

	//receives courseId and courseName
	render(){
		return (<div className="courseContainer">
		<FieldDisplay id={this.props.courseId} text={this.props.courseName} />
		<ButtonSubscribe subscribeUser = {this.props.subscribeUser} courseId = {this.props.courseId} />
		</div>);
	}

}