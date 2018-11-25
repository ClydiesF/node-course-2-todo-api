
var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        dafault: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'cook Dinner'
});

var secondTodo = new Todo({
    // text: 'play Soul Calibur',
    completed: false,
    completedAt: 955
});


module.exports = {Todo};