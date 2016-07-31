'user strict';

import React from 'react';
import jQuery from 'jquery';
import Course from '../entities/course';
import ButtonCreate from '../buttons/button-create';
import FieldEdit from '../fields/field-edit';
import CourseTeacher from '../entities/course-teacher';
import ButtonLogout from '../buttons/button-logout';
import ButtonMyClassRoom from '../buttons/button-my-classroom';
import ButtonAllCourses from '../buttons/button-all-courses';
import ButtonManageUsers from '../buttons/button-manage-users';


export default class PageCourses extends React.Component{

	constructor(){
		super();

		this.state = {
			courses: [],
			isCreatingNew: false,
			isFilteredByUser: false
		};

		this._timer;
	}

	render(){
		let coursesTeacher;
		let coursesStudent;

		if (this.state.isFilteredByUser === false) {
		 	coursesTeacher = this._getCourses();
		 	coursesStudent = this._getCoursesStudent();
		} else{
			coursesTeacher = this._getCoursesByUserId();
			 coursesStudent = this._getCoursesStudentByUserId();
		}

		let editField = this._revealNewCourseField();
		let role = sessionStorage.getItem('oss-role');
		let statusAndGreeting = this._displayStatusAndGreeting();

		if (role === 'admin') {
			return (<div className="courses-container">
				<h1>Hello World From Page Courses.</h1>
					<ButtonManageUsers manageUsers = {this._manageUsers.bind(this)} />
					{statusAndGreeting}
					{editField}
					{coursesTeacher}
			</div>);
		}

		if (role === 'teacher') {
			return (<div className="courses-container">
					<h1>Hello World From Page Courses.</h1>
						{statusAndGreeting}
						{editField}
						{coursesTeacher}
				</div>);
		} else {
			return (<div className="courses-container">
					<h1>Hello World From Page Courses.</h1>
						{statusAndGreeting}
						{coursesStudent}
				</div>);
		}
	}

	_manageUsers(){
		window.location.replace('/users');
	}

	_subscribeUser(courseId){
		let usrId = sessionStorage.getItem('oss-id');
		
		jQuery.ajax({
		  method: 'POST',
		  url: '/api/users/' + usrId + '/subscribe/courses/' + courseId,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
		  success: () => {
		  	
		  }
		});
	}

	_displayStatusAndGreeting(){
		let role = sessionStorage.getItem('oss-role');
		let first_name = sessionStorage.getItem('oss-first_name');


		if (this.state.isFilteredByUser === true) {
			if (role === 'admin') {
			return (<div className="greeting">Admin: Hello, {first_name.toUpperCase()}!
				<ButtonAllCourses removeFilter = {this._getAllCourses.bind(this)}/>
				<ButtonLogout /></div>);
			} else if(role === 'teacher'){
				return (<div className="greeting">Teacher: Hello, {first_name.toUpperCase()}!
					<ButtonAllCourses removeFilter = {this._getAllCourses.bind(this)}/>
					<ButtonLogout /></div>);
			} else if(role === 'student'){
				return (<div className="greeting">Student: Hello, {first_name.toUpperCase()}!
					<ButtonAllCourses removeFilter = {this._getAllCourses.bind(this)}/>
					<ButtonLogout /></div>);
			} else {
				return (<div className="greeting">Visitor: Hello, visitor! Please, log in or sign up!</div>);
			}
		} else {
			if (role === 'admin') {
				return (<div className="greeting">Admin: Hello, {first_name.toUpperCase()}!
					<ButtonMyClassRoom toMyClassRoom = {this._enterMyClassRoom.bind(this)}/>
					<ButtonLogout /></div>);
			} else if(role === 'teacher'){
				return (<div className="greeting">Teacher: Hello, {first_name.toUpperCase()}!
					<ButtonMyClassRoom toMyClassRoom = {this._enterMyClassRoom.bind(this)}/>
					<ButtonLogout /></div>);
			} else if(role === 'student'){
				return (<div className="greeting">Student: Hello, {first_name.toUpperCase()}!
					<ButtonMyClassRoom toMyClassRoom = {this._enterMyClassRoom.bind(this)}/>
					<ButtonLogout /></div>);
			} else {
				return (<div className="greeting">Visitor: Hello, visitor! Please, log in or sign up!</div>);
			}
		}
		
	}


	_getAllCourses(){
		this.setState({isFilteredByUser: false});
	}

	_enterMyClassRoom(){
		this._fetchCoursesById();
		this.setState({isFilteredByUser: true});
	}


	_createNewCourse(){
		this.setState({isCreatingNew: true});
	}

	_revealNewCourseField(){
		if (!this.state.isCreatingNew) {
			return <ButtonCreate createNew={this._createNewCourse.bind(this)} />;
		} else {
			return <FieldEdit onSave={this._saveNewCourse.bind(this)}/>
		}
	}

	_saveNewCourse(courseName){
		jQuery.ajax({
		  method: 'POST',
		  url: '/api/courses',
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
            data: "name=" + courseName,
		  success: () => {
		  	this.setState({isCreatingNew:false});
		  }
		});
	}

	_getCoursesByUserId(){
		return this.state.courses.map((course) => 
		{ return <CourseTeacher courseId={course.courseId} onDelete = {this._deleteCourse.bind(this)}
		courseName={course.courseName} onChange={this._handleFieldChange.bind(this)} key={course.courseId} />});
	}

	_getCoursesStudentByUserId(){
		return this.state.courses.map((course) => 
		{ return <Course courseId={course.courseId} courseName={course.courseName} key={course.courseId}  />});
	}

	_getCourses(){
		return this.state.courses.map((course) => 
		{ return <CourseTeacher courseId={course.id} onDelete = {this._deleteCourse.bind(this)}
		courseName={course.name} onChange={this._handleFieldChange.bind(this)}
		subscribeUser = {this._subscribeUser.bind(this)}
		 key={course.id} />});
	}




	_getCoursesStudent(){
		return this.state.courses.map((course) => 
		{ return <Course courseId={course.id} courseName={course.name}  
		subscribeUser = {this._subscribeUser.bind(this)}
		key={course.id} />});
	}

	_handleFieldChange(courseId, courseText){
		this._updateCourseDb('/api/courses/' + courseId, courseText);
		let courses = this.state.courses;
		courses = courses.slice();
		let current = courses[courseId];
		current.name = courseText;
		courses[courseId] = current;
	}


	componentWillMount() {
		if (this.state.isFilteredByUser) {
			this._fetchCoursesById();
		} else {
			this._fetchCourses();
		}
	}


	componentDidMount() {

		this._timer= setInterval(
		() => this._coursesRouter(),
		5000);

	}

	_coursesRouter(){

		if (this.state.isFilteredByUser === true) {
			this._fetchCoursesById();
		} else {
			this._fetchCourses();
		}
	}
	




	componentWillUnmount() {
		clearInterval(this._timer);
	}



	_fetchCourses() {
		let url;
		url = '/api/courses';

		jQuery.ajax({
		  method: 'GET',
		  url: url,
		  success: (courses) => {
		    this.setState({courses});
		  }
		});
	}


	_fetchCoursesById() {
		let usrId = sessionStorage.getItem('oss-id');
		jQuery.ajax({
		  method: 'GET',
		  url: '/api/users/' + usrId + '/courses',
		  success: (courses) => {
		    this.setState({courses});
		  }
		});
	}

	_deleteCourseDb(url) {
		jQuery.ajax({
		  method: 'DELETE',
		  url: url,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
		  success: () => {
		    this._fetchCourses();
		  }
		});
	}

	_updateCourseDb(url, courseText) {
		jQuery.ajax({
		  method: 'PUT',
		  url: url,
		  headers: {
                'Authorization': 'bearerU2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA7'+
                '2oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc'
            },
            data: "name=" + courseText,
		  success: () => {
		  }
		});
	}

	_deleteCourse(courseId){
		let courses = this.state.courses.filter(function(course){
			return course.id !== courseId;
		});

		this._deleteCourseDb('/api/courses/' + courseId);

		this.setState({courses: courses});
	}

}

PageCourses.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}