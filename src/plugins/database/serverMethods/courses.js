'use strict';

let Wreck = require('wreck');




module.exports.CourseGetQueries = function(server, db){

	server.method('servGetMaterialIds', (request, reply) => {
		var courseId = request.params.id;

		db.all('SELECT id FROM course_materials WHERE course_id = ? ', 
			[courseId], (err, results) => {

			if (err) {
				throw err;
			}

			if (results) {
				reply(results);
			} else {
				reply([]);
			}
		});

	});

};


module.exports.CourseDeleteQueries = function(server, db){

	server.method('servDelCourseMaterials', (request, reply) => {
		let tokenBearer = 'bearer ' + request.auth.credentials.token;

		let materials = request.pre.servGetMaterialIds;
		if (materials.length <= 0) {
			reply('ok');
		}
		let mats = JSON.stringify(materials);
		mats = JSON.parse(mats);

		if (materials) {
			mats.forEach( (material, index) => {
				Wreck.delete(request.server.info.uri + '/api/course-materials/' + material.id, 
					{headers: {'Authorization': tokenBearer}}, function (err, res, payload) {});

				if (index === parseInt(mats.length) - 1) {
		    		reply({status:'ok'});
		    	}
			});
		} else {
			reply('ok');
		}
	});

};