const express = require("express");
const emprouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Employee = require("../../models/employee");

// @route POST api/employees/add
// @desc Create Employee
// @access Public

emprouter.route('/add').post(function (req, res) {
    const emp = new Employee(req.body);
    emp.save()
        .then(emp => {
            res.status(200).json('Employee added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//Get data from database
emprouter.route('/').get(function (req, res) {
    Employee.find(function (err, employees) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employees);
        }
    });
});

// Defined edit route
emprouter.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Employee.findById(id, function (err, employees) {
        res.json(employees);
    });
});

//Edit Route
emprouter.route('/update/:id').post(function (req, res) {
    let id = req.params.id;
    Employee.findById(id, function (err, emp) {
        if (!emp)
            res.status(404).send("data is not found");
        else {
            emp.firstname = req.body.firstname;
            emp.lastname = req.body.lastname;
            emp.address = req.body.address;
            emp.city = req.body.city;
            emp.state = req.body.state;
            emp.zipcode = req.body.zipcode;
            emp.homephone = req.body.homephone;
            emp.cellphone = req.body.cellphone;
            emp.email = req.body.email;

            emp.save().then(emp => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to the database");
                });
        }
    });
});
module.exports = emprouter;