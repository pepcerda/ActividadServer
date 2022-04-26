
const mongoose = require('mongoose'); 
const employees = require('../data/employees.json'); 

const schema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    age: {
        type: Number, 
        required: true
    }, 
    phone: {
        personal: {
            type: String, 
            required: true
        }, 
        work: {
            type: String, 
            required: true
        }, 
        ext: {
            type: String, 
            required: true
        }
    }, 
    privileges: {
        type: String, 
        required: true
    }, 
    favorites: {
        artist: {
            type: String, 
            required: true
        }, 
        food:{
            type: String, 
            required: true
        }
    }, 
    finished: {
        type: [Number], 
        required: true
    }, 
    badges: {
        type: [String], 
        required: true
    }, 
    points: [{
        points: {
            type: Number, 
            required: true
        }, 
        bonus: {
            type: Number, 
            required: true
        }
    }]

});

const Employee = mongoose.model("Employee", schema); 

const employees_promise = Employee.insertMany(employees)
                                    .then((employees => console.log(`Employees inserted ${employees}`)))
                                    .catch(err => console.log(err)); 

module.exports = Employee; 