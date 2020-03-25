
//importing dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating the Schema 
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

module.exports = User = mongoose.model("users", UserSchema);