import React from 'react';
import jQuery from 'jquery';
// import Course from './course';
import CourseAdmin from './course-teacher';


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
			{ return <CourseAdmin courseId={course.id}  courseName={course.name} key={course.id} />});
	}

	componentWillMount() {
		this._fetchCourses();
	}


	componentDidMount() {
		this._timer= setInterval(
		() => this._fetchCourses(),
		5000);
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

}

PageCourses.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
}