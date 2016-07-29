import React from 'react';
import DeleteButton from './button-delete';
import FieldDisplay from './field-display';
import FieldEdit from './field-edit';

//receives courseId and courseName
export default class CourseTeacher extends React.Component{

	constructor(){
		super();
		this.state = {
			fieldIsInEditMode: false
		}

	}
	
	//receives courseId and courseName
	render(){
		if (this.state.fieldIsInEditMode === false) {
			return (<div className="courseContainer">
						<FieldDisplay id={this.props.courseId} text={this.props.courseName} 
						onEdit={this._handleEdit.bind(this)} />
						<DeleteButton id={this.props.courseId} onDelete={this.props.onDelete} /></div>);
		} else {
			return (<div className="courseContainer"><FieldEdit id={this.props.courseId} text={this.props.courseName} 
						onSave={this._handleSave.bind(this)} onChange = {this.props.onChange} />
						<DeleteButton id={this.props.courseId} onDelete={this.props.onDelete} /></div>);
		}
	}

	//receives courseId and courseName
	_handleEdit(){
		this.setState({fieldIsInEditMode: true});
	}

	//receives courseId and courseName
	_handleSave(){
		this.setState({fieldIsInEditMode: false});
	}
}