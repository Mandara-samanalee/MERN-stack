const User = require('./model'); //import User model from model.js


/* write methods for get, create, update, delete using mongodb */
const getUsers = (req, res, next) => (
    User.find()
        .then(response => { 
          res.json((response)) //convert response to json object
        })
        .catch(error => {
          res.json({message: error})
        })
)


//method to create a user
const createUser = (req, res, next) => {
    const user = new User({ //create new instance of User object
        id: req.body.id,
        name: req.body.name, //the id and the name send in the request body is saved by the save() function
    });
    user.save()
        .then(response => {
            res.json((response)) //convert response to json object
        })
        .catch(error => {
            res.json({ message: error })
        })
}


//method to update user
    const updateUser = (req, res, next) => {
        const { id, name } = req.body; //extract id and the name from the req body
        User.updateOne({ id: id }, { $set: { name: name } }) //update the name of the user relevant to id
            .then(response => {
                res.json((response)) //convert response to json object
            })
            .catch(error => {
                res.json({ message: error })
            })
} 


//method to delete user
    const deleteUser = (req, res, next) => {
        const id = req.body.id;
        User.deleteOne({ id: id })//delete user relevant to id
            .then(response => {
                res.json((response)) //convert response to json object
            })
            .catch(error => {
                res.json({ message: error })
            })
}
 

exports.getUsers = getUsers; //export getUsers function
exports.createUser = createUser; //export getUserById function
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
