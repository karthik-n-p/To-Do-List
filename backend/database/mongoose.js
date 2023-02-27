const mongoose = require('mongoose');
//const mongoose = require('mongoose'); - This line imports the Mongoose library into the Node.js application and assigns it to the mongoose constant
mongoose.Promise = global.Promise;
//This line sets the Mongoose default Promise library to use the global Promise library, which is a built-in feature of Node.js.
//In JavaScript, a Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future. Promises are used to handle asynchronous operations, such as reading data from a database or making HTTP requests, that may take some time to complete.


mongoose.connect('mongodb://127.0.0.1:27017/task-manager',{ useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))

//This line is a Promise callback that is executed when the database connection is successful. It logs a message to the console indicating that the application has successfully connected to the MongoDB database.
.catch((error) => console.log( error));
//This line is a Promise callback that is executed when the database connection fails. It logs an error message to the console indicating the reason for the failure.
 module.exports = mongoose;
