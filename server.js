const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path');

/* Instantiate the server */
const server = express()

// import the routes
const index = require('./routes')

/* Setup the viewEngine */
server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

/* Set the public folder */
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', index)

/* Start the Server */
server.listen(8080, () => {
  console.log('Server is on @ http://localhost:8080')
})
