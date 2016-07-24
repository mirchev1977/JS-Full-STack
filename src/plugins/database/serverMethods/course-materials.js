'use strict';

let Wreck = require('wreck');




module.exports.CourseMaterialDeleteQueries = function(server, db){


	server.method('servDelMaterialTopic', (request, reply) => {

		let materialId = request.params.id; 


		db.run('DELETE FROM course_materials WHERE id = ?', 
		    [
		        materialId
		    ], (err, result) => {
		    

		    if (err) {
		        throw err;
		    }


		    db.all('SELECT id FROM topics WHERE course_material_id = ?', [request.params.id], (err, result) => {

		        if (err) {
		            throw err;
		        }

		        if (typeof result !== 'undefined') {
		            var topicId = result;


		            db.run('DELETE FROM topics WHERE course_material_id = ?', 
					    [
					        materialId
					    ], (err, result) => {
					    	
					    if (err) {
					        throw err;
					    }


					    reply(topicId);


					});
		        }
		        else {
		            reply('Not found').code(404);
		        }
		    });
		});
	});

	server.method('servDelUserTopics', (request, reply) => {
		let topics = request.pre.servDelMaterialTopic;

		topics.forEach( function (topic, index) {
			db.run('DELETE FROM user_topics WHERE topic_id = ?', 
		        [
		            topic.id
		        ], (err, result) => {
		        

		        if (err) {
		            throw err;
		        }

		        if (index === topics.length -1) {
		        	reply({status:"deleted"});
		        }
		    });
		});
	});
}