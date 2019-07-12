const db = require('../db')
const mongoose = require('mongoose')

const db_message = db.model('posts', {
    username: {
			type: String,
		  required: true
		},

		date: {
			type: Date,
		  default: Date.now()
		},

		body: {
			type: String,
		  required: [true, "Try Again: Empty Post"]
		},
    hashtag: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'hashtag'

		},

		like: {
			type: Number
		}
})

module.exports = db_message
