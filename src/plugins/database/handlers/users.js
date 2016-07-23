'use strict';

let CryptoJS = require("crypto-js");

module.exports.getAll = function (request, reply) {

    this.db.all('SELECT * FROM users', (err, results) => {

        if (err) {
            throw err;
        }

        reply(results);
    });
};

module.exports.getOne = function (request, reply) {
    this.db.get('SELECT * FROM users WHERE id = ?', [request.params.id], (err, result) => {

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

module.exports.getCoursesSubscribedOn = function (request, reply) {
    this.db.all('SELECT u.id as usrId, u.first_name, u.last_name, u.role, c.id as courseId, c.name as courseName ' + 
        ' FROM users as u INNER JOIN user_courses' + 
        ' ON u.id=user_courses.user_id ' + 
        ' INNER JOIN courses as c ON user_courses.course_id=c.id ' + 
        ' WHERE u.id = ?', [request.params.id], (err, result) => {

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


module.exports.getCourseMaterials = function (request, reply) {
    let user = request.pre.servGetUser;
  //   "id": 1,
  // "first_name": "Patrick",
  // "last_name": "McWayne",
  // "email": "patrick@patrickwayne.com",
  // "password": "patrick",
  // "token": null,
  // "role": "admin",
  // "points": 0
    let course = request.pre.servGetUserCourses;
//     {
//   "usrId": 1,
//   "first_name": "Patrick",
//   "last_name": "McWayne",
//   "role": "admin",
//   "courseId": 2,
//   "courseName": "jQuery Basics"
// }

    request.pre.servGetCourseMaterials;


    let materials = request.pre.servGetCourseMaterialsTopics;
    // "id": 4,
    // "title": "Introduction to jQuery\n\n",
    // "text": "In this stage we'll cover the whys, whats and hows of jQuery. You'll learn why you would want to use jQuery, what jQuery is and how to include it in your projects.\n\n",
    // "course_id": 2,
    // "topics": [
    //   {
    //     "id": 1,
    //     "topic": "JavaScript Everywhere",
    //     "text":

    let info = {
        userId: user.id,
        userName:  user.first_name,
        lastName: user.last_name,
        courseName: course.courseName,
        materials: []
    };

    materials.forEach( function(material, index) {
        let infoMaterial =  {
            materialId: material.id,
            title: material.title,
            materialText: material.text,
            topics: material.topics
            // topicId: materials.id,
            // topic: materials.topic,
            // topicText: materials.text
        }

        info.materials.push(infoMaterial);
    });

    

    reply(info);

    
};



module.exports.getCourseCompletedTopics = function (request, reply) {
    let user = request.pre.servGetUser;
  //   "id": 1,
  // "first_name": "Patrick",
  // "last_name": "McWayne",
  // "email": "patrick@patrickwayne.com",
  // "password": "patrick",
  // "token": null,
  // "role": "admin",
  // "points": 0
    let course = request.pre.servGetUserCourses;
//     {
//   "usrId": 1,
//   "first_name": "Patrick",
//   "last_name": "McWayne",
//   "role": "admin",
//   "courseId": 2,
//   "courseName": "jQuery Basics"
// }

    request.pre.servGetCourseMaterials;


    let materials = request.pre.servGetCourseCompletedTopics;
    // "id": 4,
    // "title": "Introduction to jQuery\n\n",
    // "text": "In this stage we'll cover the whys, whats and hows of jQuery. You'll learn why you would want to use jQuery, what jQuery is and how to include it in your projects.\n\n",
    // "course_id": 2,
    // "topics": [
    //   {
    //     "id": 1,
    //     "topic": "JavaScript Everywhere",
    //     "text":

    let info = {
        userId: user.id,
        userName:  user.first_name,
        lastName: user.last_name,
        courseName: course.courseName,
        materials: []
    };

    materials.forEach( function(material, index) {
        let infoMaterial =  {
            materialId: material.id,
            title: material.title,
            materialText: material.text,
            topics: material.topics
            // topicId: materials.id,
            // topic: materials.topic,
            // topicText: materials.text
        }

        info.materials.push(infoMaterial);
    });

    

    reply(info);

    
};




module.exports.create = function (request, reply) {

    // // Encrypt 
    let pass = CryptoJS.AES.encrypt(request.payload.password, 'secret key 123');
    pass = pass.toString();

    let tok = CryptoJS.AES.encrypt(request.payload.email + ' ' + request.payload.password + ' student', 'this is the token');
    tok = tok.toString();

    const sql = 'INSERT INTO users (first_name, last_name, email, password, token, role, points)'+
    ' VALUES (?, ?, ?, ?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.first_name,
            request.payload.last_name,
            request.payload.email,
            pass,
            tok,
            'student',
            0
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};

module.exports.createByAdmin = function (request, reply) {

    // // Encrypt 
    let pass = CryptoJS.AES.encrypt(request.payload.password, 'secret key 123');
    pass = pass.toString();

    let tok = CryptoJS.AES.encrypt(request.payload.email + ' ' + request.payload.password + ' ' + 
        request.payload.role, 'this is the token');
    tok = tok.toString();

    const sql = 'INSERT INTO users (first_name, last_name, email, password, token, role, points)'+
    ' VALUES (?, ?, ?, ?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.first_name,
            request.payload.last_name,
            request.payload.email,
            pass,
            tok,
            request.payload.role,
            0
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};

module.exports.subscribeCourse = function (request, reply) {

    this.db.get('SELECT * FROM users WHERE id = ?', [request.params.userId], (err, resultUsr) => {

        if (err) {
            throw err;
        }

        if (typeof resultUsr !== 'undefined') {
            

            /********************************
            GET COURSE ID
            **********************************/

            this.db.get('SELECT * FROM courses WHERE id = ?', [request.params.courseId], (err, resultCourse) => {

                if (err) {
                    throw err;
                }

                if (typeof resultCourse !== 'undefined') {


                    /********************************
                    USER SUBSCRIBES ON A COURSE
                    **********************************/

                    const sql = 'INSERT INTO user_courses (user_id, course_id, status)'+
                    ' VALUES (?, ?, ?)';

                    this.db.run(sql,
                        [
                            resultUsr.id,
                            resultCourse.id,
                            'In Progress'
                        ],
                    (err) => {

                        if (err) {
                            throw err;
                        }

                        reply({ status: 'ok' });
                    });


                    /********************************
                    END USER SUBSCRIBES ON A COURSE
                    **********************************/



                    
                }
                else {
                    reply('Not found').code(404);
                }
            });

            /********************************
            END GET COURSE ID
            **********************************/








        }
        else {
            reply('Not found').code(404);
        }
    });

};




module.exports.coverTopic = function (request, reply) {

    this.db.get('SELECT * FROM users WHERE id = ?', [request.params.userId], (err, resultUsr) => {

        if (err) {
            throw err;
        }

        if (typeof resultUsr !== 'undefined') {
            

            /********************************
            GET TOPIC ID
            **********************************/

            this.db.get('SELECT * FROM topics WHERE id = ?', [request.params.topicId], (err, resultTopic) => {

                if (err) {
                    throw err;
                }

                if (typeof resultTopic !== 'undefined') {


                    /********************************
                    USER COVERS A TOPIC
                    **********************************/

                    const sql = 'INSERT INTO user_topics (user_id, topic_id, completed)'+
                    ' VALUES (?, ?, ?)';

                    this.db.run(sql,
                        [
                            resultUsr.id,
                            resultTopic.id,
                            true
                        ],
                    (err) => {

                        if (err) {
                            throw err;
                        }

                        reply({ status: 'ok' });
                    });


                    /********************************
                    END USER COVERS A TOPIC
                    **********************************/



                    
                }
                else {
                    reply('Not found').code(404);
                }
            });

            /********************************
            END GET TOPIC ID
            **********************************/








        }
        else {
            reply('Not found').code(404);
        }
    });

};