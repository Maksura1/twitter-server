const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors =require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

//require database
require('./db')

//create controllers for messages
app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))

app.post('/api/hashtags', require('./controllers/post_hashtag'))
app.get('/api/hashtags', require('./controllers/get_hashtag'))

app.post('/api/user', require('./controllers/post_user'))
app.get('/api/users', require('./controllers/get_users'))

//connect to port on env
app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('ERROR:', err)
	} else {
		console.log(`Ready on port ${process.env.PORT}`)
	}
})
