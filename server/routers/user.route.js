const express = require("express");
const UserController = require("../controllers/user.controller");
const UserRouter = express.Router();

UserRouter.get("/get", (req, res) => {
    res.send("User Router")
})
UserRouter.post('/', UserController.create);

module.exports = UserRouter