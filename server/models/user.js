
var mongoose = require('mongoose');

var users = mongoose.model('user', {
    email: {
        required: true,
        type: String,
        minLength: 1,
        trim: true
    }
})

module.exports = {
    users
}