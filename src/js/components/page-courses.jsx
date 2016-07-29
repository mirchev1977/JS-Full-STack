import React from 'react';
import jQuery from 'jquery';
// import Course from './course';
import CourseTeacher from './course-teacher';


export default class PageCourses extends React.Component{

	constructor(){
		super();

		this.state = {
			courses: []
		};
	}

	render(){
		var courses = this._getCourses();
		return (<div className="courses-container">
					<h1>Hello World From Page Courses.</h1>
					{courses}
				</div>);
	}

	_getCourses(){
		return this.state.courses.map((course) => 
		{ return <CourseTeacher courseId={course.id} onDelete = {this._deleteCourse.bind(this)}
		courseName={course.name} onChange={this._handleFieldChange.bind(this)} key={course.id} />});
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
		this._fetchCourses();
	}


	componentDidMount() {
		this._timer= setInterval(
		() => this._fetchCourses(),
		10000);
	}

	componentWillUnmount() {
		clearInterval(this._timer);
	}


	_fetchCourses() {
		jQuery.ajax({
		  method: 'GET',
		  url: this.props.apiUrl,
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