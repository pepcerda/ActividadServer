const Employee = require('../models/employee.model'); 

module.exports.list = (req, res, next) => {
    console.log("Llego aquí"); 
    if(req.query.page) {
        let page = req.query.page; 
        Employee.find()
        .skip(2*(page-1))
        .limit(2)
        .then(employees => res.json(employees))
        .catch(next);   

    } else if(req.query.user === 'true') {
        Employee.find({privileges: "user"})
        .then(employees => res.json(employees))
        .catch(next); 
    } else if (req.query.badges === "black") {
        Employee.find({badges: "black"})
        .then(employees => res.json(employees))
        .catch(next); 
    } else {
        Employee.find()
        .then(employees => res.json(employees))
        .catch(next); 
    }

}

module.exports.listOldest = (req, res, next) => {
    Employee.find()
    .sort({age: -1})
    .limit(1)
    .then(employees => res.json(employees))
    .catch(next); 
}

module.exports.listByName = (req, res, next) => {
    Employee.find({name: req.params.name})
    .then((employees) => {
        if(employees) {
            res.json(employees);
        }
        else {
            res.status(404).json({
                "code": "not_found"
            }); 
        }
    })
    .catch(next); 
}

module.exports.create = (req, res, next) => {
    const data  = ({name, age, phone, privileges, favorites, finished, badges, points} = req.body); 
    Employee.create(data)
    .then((employee) => {
        res.status(201).json(employee); 
    })
    .catch(next); 
}