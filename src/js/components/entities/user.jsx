import React from 'react';
import DeleteButton from '../buttons/button-delete';
import FieldDisplay from '../fields/field-display';
import FieldEdit from '../fields/field-edit';
// import jQuery from 'jquery';


export default class CourseTeacher extends React.Component{

	constructor(){
		super();
		this.state = {
			fieldIsInEditMode: false,
		}

	}
	
	//receives courseId and courseName
	render(){
		if (this.state.fieldIsInEditMode === false) {
			return (<div className="courseContainer">
						<FieldDisplay id={this.props.userId} text={this.props.firstName} 
						onEdit={this._handleEdit.bind(this)} />
						<DeleteButton id={this.props.userId} onDelete={this.props.onDelete} /></div>);
		} else {
			return (<div className="courseContainer"><FieldEdit id={this.props.userId} text={this.props.firstName} 
						onSave={this._handleSave.bind(this)} onChange = {this.props.onChange} />
						<DeleteButton id={this.props.userId} onDelete={this.props.onDelete} /></div>);
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