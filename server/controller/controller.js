var Userdb = require('../model/model')

//create and save new user
exports.create = (req,res) => {
// validate request
if (!req.body) {
    res.status(400).send({message:"Content cannot be empty"});
    return;
}
const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    status: req.body.status
})
}

//save user to database
user
    .save (user)
    .then(data => {
        // res.send(data)
        res.redirect('/add-user')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured while creating a create operation"
        })
    })

// retrieve and return all users / retrieve single user
exports.find = (req,res) => {
    if(req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: "Not found user with id " + id})
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: "Error retrieving user with the id " +id})
        }) 

    } else {
        Userdb.find()
        .then(user => {
            res.send(user)
        }).catch(err=> {
            res.status(500).send({message:err.message || "An error occured while retrieving user"})
        })
    }


}

// update a user by user id
exports.update = (req,res) => {
    if (!req.body) {
        return res.status(400)
        .send({message: "Data to update cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data=> {
        if(!data) {
            res.status(404).send({message: `Cannot Update user with ${id}. User not found.`})
        }
        else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({message: "Error Update User Information"})
    })
}

// delete a user by specified user ID

exports.delete = (req, res) => {
     const id = req.params.id;

     Userdb.findByIdAndDelete(id) 
        .then(data => {
            if(!data) {
                res.status(400).send({message: `Cannot Delete User with id ${id}. Please Check id`})
            } else {
                res.send({
                    message: "User was deleted successfully"
                })  
            }
        }).catch(err => {
            res.status(500).send({message: "Could Not Delete User with id " + id})
        })
}