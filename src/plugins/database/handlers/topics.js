'use strict';

let Wreck = require('wreck');

module.exports.getAll = function (request, reply) {
	this.db.all('SELECT * FROM topics', (err, results) => {

		if (err) {
			throw err;
		}

		reply(results);
	});
};

module.exports.getOne = function (request, reply) {
    this.db.get('SELECT * FROM topics WHERE id = ?', [request.params.id], (err, result) => {

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
};

module.exports.delete = function (request, reply) {
    let topicId = request.params.id;

    this.db.run('DELETE FROM topics WHERE id = ?', 
        [
            topicId
        ], (err, result) => {
        

        if (err) {
            throw err;
        }




        this.db.run('DELETE FROM user_topics WHERE topic_id = ?', 
            [
                topicId
            ], (err, result) => {
            

            if (err) {
                throw err;
            }

            reply({status:"deleted"});
        });


        
    });
};