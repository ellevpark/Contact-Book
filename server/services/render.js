const axios = require("axios")

exports.homeRoutes = (req,res) => {
    // Make a get request to /api/users
    axios.get("https://localhost:3000/api/users")
        .then(function(response){
            console.log(response.data)
            res.render('index', {users:response.data})
        }).catch(err => {
            res.send(err)
        })
    res.render('index', {users: "New Data"});
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get("https://localhost:3000/api/users", {params:{id: req.query.id}})
        .then(function(userdata){
            res.render("update-user", {user: userdata.data})
        }).catch(err => {
            res.send(err)
        })
    
}