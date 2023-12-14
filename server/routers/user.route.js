const express = require("express");
const UserRouter = express.Router();

UserRouter.get("/get", (req, res) => {
    res.send("User Router")
})

module.exports = UserRouter