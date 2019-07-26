const db_user = require('../models/user')
const bcrypt = require('bcrypt')
//bcrypt package allows you to encrypt password

module.exports = (req, res) => {

//bcrypt takes password and encrypts it
//the encrypted pw is called encrypted
//the data is then stored in database
	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
		if (err) {
			res.status(300).send('ERROR:', err)
		} else {
			req.body.password = encrypted
			db_user.create(req.body).then((data) => {
		res.send(data)
		console.log(data)
	}).catch((err) => {
		res.send(err)
	})
})
}
