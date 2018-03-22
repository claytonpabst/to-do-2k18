const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js');

const app = module.exports = express();
// var server = require('http').createServer(app);
// const io = require('socket.io')(server, { origins: '*:*'});


// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//       setInterval(() => {
//         client.emit('timer', new Date());
//       }, interval);
//   });
// });

app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: false,
  cookie:{
    maxAge: (1000*60*60*24*14) 
  }
}))

massive(config.connection)
.then( db => {
  app.set('db', db);
})

app.use(express.static(__dirname + './../build'))

var toDoController = require("./toDoController.js");

app.get('/api/getToDoCategories/', toDoController.getToDoCategories);
app.get('/api/addCategory/', toDoController.addCategory);
app.post('/api/addTask/', toDoController.addTask);
app.put('/api/updateCategoryName/', toDoController.updateCategoryName);
app.put('/api/updateTaskName/', toDoController.updateTaskName);
app.put('/api/deleteCategory/', toDoController.deleteCategory);
app.put('/api/deleteTask/', toDoController.deleteTask);
app.put('/api/deletePlaceholder/', toDoController.deletePlaceholder);

// console.log('server is working', toDoController.getToDoCategories)





app.listen(config.port);
console.log("listening on port:" + config.port);