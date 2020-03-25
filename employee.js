const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        maxlength: 2
    },
    zipcode: {
        type: Number,
        required: true
    },
    homephone: {
        type: Number,
        required: true
    },
    cellphone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = Employee = mongoose.model("employee", EmployeeSchema);