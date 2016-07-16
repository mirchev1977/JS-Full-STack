# JS-Full-STack
Full Stack Api
1 Project General Info
1.1 Assignment1
1.1.1 Project Summary
1.2 Course
1.2.1 Full-stack Development with Node.js and React.js - 2016
1.3 Project Author
1.3.1 Miroslav Mirchev
1.3.1.1 mirchev1977@yahoo.com
1.4 Project
1.4.1 Project Name
Online School System
1.4.2 Short Description
mirchev1977@novihorizonti.eu: 

The Online School System is an excellent opportunity for students to receive distance education online. 

There are various subject which are provided by the school system rendered via video recordings of easily digestible information chunks in the form of main topics and sub topics.

Teachers can create courses on different subjects and provide materials for them. Teachers can also create test materials in the form of quizzes and code challenges to make it possible for the students to follow their own progress. 

By each test passed, the student receives points and rating respectively.

If anonymous, the student has the opportunity to access the free of charge courses, get informed about them, and review their materials, pass the tests, but not gain points and respectively get rated between the rest of the students. Registration gives students opportunity to participate in the paid courses and follow their own progress by gaining points and be rated among the other course participants. 

Points can be awarded only once for course test passed. If students decide to review a course material in order to consolidate the material inside and pass a test again, they gain no points.

The students get access to the courses and their materials via a dash board where they can register and unregister  to various courses, be displayed information about courses, materials, points and ratings.

Teachers and administrators have also their dashboard where they can administer students, update materials and give support on users with their accounts.

OSS has also administrators of the school management who can manage the online system and its users.  
The system will be developed as a Single Page Application (SPA) using React.js as front-end, and Node.js + hapi as backend technologies.

1.5 Main User Roles
1.5.1 Anonimous Student
Can view the courses information pages and participate in the free courses with no possibility for following progress, gaining points for tests passed and be rated among the other students.
1.5.2 Registered User
The registered users can be:

Administrator
Teacher
Student
1.5.2.1 Administrator
Extends Registered User.

Can manage (create, edit user data and delete) all Registered Users, as well as create courses, course materials and tests.
1.5.2.2 Teacher
Extends Registered User.

Can create courses, materials to them and tests.
1.5.2.3 Student
Extends Registered User.

Can subscribe to various courses, follow their own progress, gain points for passing tests and be rated among the other course participants.

They gain no points for passing a test more than once.
2 Main Use Cases / Scenarios
2.1 Browse all courses courses, learn from free courses and do tests, but not follow progress and be rated
2.1.1 Brief Description
The User can browse the information views (Home, Courses, About) in OSS SPA, and can learn from free courses and do tests, but no follow progress and be rated.

2.1.2 Actors Involved
2.1.2.1 All users
2.2 Register
2.2.1 Brief Description
Anonymous User  can register in the system by providing a valid e-mail address, first and last name, and choosing password. By default all new registered users have Student role.

Administrator can register new users by entering User Data and choosing a Role (Student, Teacher, or Administrator).

2.2.2 Actors Involved
2.2.2.1 Anonimous User
2.2.2.2 Administrator
2.3 Change Data
2.3.1 Brief Description
2.3.2 Actors Involved
2.3.2.1 Registered  User
2.3.2.2 Administrator
Registered User can view and edit her personal User Data.
Administrator can view and edit User Data of all Users and assign them Roles: Student, Teacher, or Administrator.

2.4 Manage Users
2.4.1 Brief Description
Administrator can browse and filter users based on different criteria: first and last name, email, Role. 
Administrator can choose a User to manage, and can manage the chosen User - edit, or delete.
Administrator can create a new user.

2.4.2 Actors Involved
2.4.2.1 Administrator
2.5 Manage Courses
2.5.1 Brief Description
Instructor can browse their Courses and course materials, add new Courses and materials to them using Add/Edit at the dash board, and delete a Course / Material, as well as view the Students' progress.
Administrator can browse courses of all Teachers, edit and delete them.

2.5.2 Actors Involved
2.5.2.1 Teacher
2.5.2.2 Administrator
2.6 Add / Edit course / material
2.6.1 Brief Description
Teacher or Administrator specifies/edits Course / Material  meta-data such as: name, subject, description, and tags. Teacher or Administrator can create/edit or delete specific materials supplied to course.
2.6.2 Actors Involved
2.6.2.1 Teacher
2.6.2.2 Administrator
2.7 Complete Course / Topic
2.7.1 Brief Description
Registered Student or Instructor browses available courses and materials and can sort and filter them using different metadata fields.  Student or Teacher  chooses a course / material to complete. OSS presents the Course materials and tests one by one to the Student or Teacher, who follow them. On Course / Material / Test completion the results are saved by OSS.

2.7.2 Actors Involved
2.7.2.1 Student
2.7.2.2 Teacher
2.8 Browse Courses and Points
2.8.1 Brief Description
Students can browse the courses they have completed and points gained for each of them.

Teachers can browse courses they have created.
2.8.2 Actors Involved
2.8.2.1 Student
2.8.2.2 Teacher
3 API Resources - Node.js Backend
3.1 Users
3.1.1 Brief Description
GET User Data for all users, and POST new User Data (Id is auto-filled by OSS and modified entity is returned as result from POST request). Available only for Administrators.

3.1.2 URI
3.1.2.1 api/users
3.2 User
3.2.1 Brief Description
GET, PUT, DELETE User Data for User with specified userId.

3.2.2 URI
3.2.2.1 3.3 Courses
3.3.1 Brief Description
GET courses (according to User's Role and identity) and POST new Course (Id is auto-filled by OSS and modified entity is returned as result from POST request).

3.3.2 URI
3.3.2.1 api/courses
3.4 Course
3.4.1 Brief Description
GET, PUT, DELETE Course 
3.4.2 URI
3.4.2.1 3.5 Course Materials
3.5.1 Brief Description
GET all Course Materials, be able to post new material
3.5.2 URI
3.5.2.1 3.6 Course Material
3.6.1 Brief Description
GET, POST, UPDATE and DELETE Specific Course Material
3.6.2 URI
3.6.2.1 3.7 Material Tests
3.7.1 Brief Description
GET all Material Tests, be able to post new test

3.7.2 URI
3.7.2.1 3.8 Test
3.8.1 Brief Description
GET, POST, UPDATE and DELETE Specific Material Test

3.8.2 URI
3.8.2.1 4 Main Views (SPA Frontend)
4.1 Home
4.1.1 Brief Description
Presents the introductory information for the purpose of the system as well as detailed instructions how to start using it. Prominently offers ability to register.
4.1.2 URI
4.1.2.1 /
4.1.2.2 user/
4.2 Courses
4.2.1 Available Courses
4.2.1.1 Brief Description
Presents courses available according to User's Role and identity. Offers abilities to create, read, update, delete (CRUD), as well as browse Courses. Display Points Gain in individual courses.
4.2.1.2 URI
4.2.1.2.1 /courses
4.2.1.2.2 /user/courses
4.2.2 Completed Courses
4.2.2.1 Brief Description
Display User's completed Courses and points.
4.2.2.2 URI
4.2.2.2.1 /user/courses/completed
4.2.3 In Progress
4.2.3.1 Brief Description
Display User's Courses in progres and points.

4.2.3.2 URI
4.2.3.2.1 user/courses/inprogress
4.3 User Data
4.3.1 Personal Data
4.3.1.1 URI
4.3.1.1.1 Brief Description
Presents ability to view and edit personal User Data, as well as deregister from OSS.

4.3.1.1.2 user/personal
4.3.2 Rating
4.3.2.1 Brief Description
Display User's points and rating in regard to the rest of the course partakers
4.3.2.2 user/rating
4.4 Users
4.4.1 Brief Description
Presents ability to  manage (CRUD) Users and their User Data (available for Administrators only, as described in UCs).
4.4.2 URI
4.4.2.1 users
4.5 About
4.5.1 Brief Description
4.5.2 URI
4.5.2.1 about
Presents information about the OSS project and its owner.
