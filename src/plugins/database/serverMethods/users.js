'use strict';

let Wreck = require('wreck');




module.exports.GetQueries = function(server, db){





	server.method('servGetUser', (request, reply) => {
	    db.get('SELECT * FROM users WHERE id = ?', [request.params.id], (err, result) => {

	        if (err) {
	            throw err;
	        }

	        if (typeof result === 'undefined') {
	            reply(null);
	        } else {
	       		reply(result);
	        }
	        
	    });
	});



	server.method('servGetUserCourses', (request, reply) => {
	    let userId = request.pre.servGetUser.id;



	    db.get('SELECT u.id as usrId, u.first_name, u.last_name, u.role, c.id as courseId, c.name as courseName ' + 
	        ' FROM users as u INNER JOIN user_courses' + 
	        ' ON u.id=user_courses.user_id ' + 
	        ' INNER JOIN courses as c ON user_courses.course_id=c.id ' + 
	        ' WHERE u.id = ? AND c.id = ?', [userId, request.params.courseId], (err, result) => {

	        if (err) {
	            throw err;
	        }

	        if (typeof result !== 'undefined') {
	            reply(result);
	        }
	        else {
	            reply('Not found').code(404);
	        }

	    });

	});



	server.method('servGetCourseMaterials', (request, reply) => {
    	let courseId = request.pre.servGetUserCourses.courseId;

    	db.all('SELECT * FROM course_materials WHERE course_id = ?', [courseId], (err, results) => {

			if (err) {
				throw err;
			} 

			reply(results);
		});
    });




    server.method('servGetCourseMaterialsTopics', (request, reply) => {
    	let materialsArr = request.pre.servGetCourseMaterials;
    	let retArr = [];

    	if (materialsArr.length > 0) {


    		materialsArr.forEach( function(material, index) {
    		var materialId = material.id;

	    		db.all('SELECT id, topic FROM topics WHERE course_material_id= ?', [materialId], (err, result) => {

	    			if (err) {
	    				throw err;
	    			}


	    			if (typeof result !== 'undefined') {
			            material.topics  =  result;
	    				retArr.push(material);
			        }
			        else {
			            reply('Not found').code(404);
			        }


	    			if (index === materialsArr.length - 1) {
	    				reply(retArr);
	    			}


	    		});

	    	});

    	} else {
    		reply(retArr);
    	}


    	

    });



    server.method('servGetCourseCompletedTopics', (request, reply) => {
    	let userId = request.pre.servGetUser.id;
    	let materialsArr = request.pre.servGetCourseMaterials;
    	let retArr = [];

    	if (materialsArr.length > 0) {


    		materialsArr.forEach( function(material, index) {
    		var materialId = material.id;

	    		db.all('SELECT t.id, t.topic, ut.completed FROM topics as t '  +  
	    			' INNER JOIN user_topics as ut ON t.id=ut.topic_id' +
	    			'  INNER JOIN users as u ON ut.user_id=u.id  ' +
	    			' WHERE t.course_material_id= ? AND u.id= ?', 
	    			[materialId, userId], (err, result) => {

	    			if (err) {
	    				throw err;
	    			}


	    			if (typeof result !== 'undefined') {
			            material.topics  =  result;
	    				retArr.push(material);
			        }
			        else {
			            reply('Not found').code(404);
			        }


	    			if (index === materialsArr.length - 1) {
	    				reply(retArr);
	    			}


	    		});

	    	});

    	} else {
    		reply(retArr);
    	}


    	

    });









};