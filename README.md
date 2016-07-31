# Online School-System (OSS)

The Online School System is a System where you can subscribe on an online course and learn from your computer at home.

In order to install it, you have to download or clone it from its github page:
https://github.com/mirchev1977/School-System.git and then 
enter the folder "src" from the terminal.

Afterwords you have to run the command:

npm install

to install its dependency libraries.



Since the backend of OSS is separated from the main project in a plugin, 
it might be necessary to enter from the terminal the folder src/plugins/database
and run there the same command in the terminal:

npm install



Once installed, you can start it by openint two terminals:
- one for the backend api
- the second for the front end

In the first you have to enter the command: npm run hapi
which starts the backend server at port: 9000.

In the second terminal you have to run the command: 
npm start.
It runs the webpack with the production version of the front end. 
The port the front end is served from is: 3000.

Once you have started the servers, you can enter in a browser 
the following address: http://localhost:3000.

There you can browse throught the pages of OSS: Home, Courses, Login, and Register.

You can also register as a student on the platform, but if unregistered,  on the page "localhost:3000/courses/" you can have a look at what course of interest you may find.

In order to subscribe on a course you have to register and then log in.
