const mongoose = require('mongoose');
const schema = mongoose.Schema; //import schema from mongoose

//create a schema for the user
const userSchema = new schema({
    id: Number,
    name: String,
});

//create a model called User for the userSchema
const User = mongoose.model('User', userSchema);

//export User model
module.exports = User;