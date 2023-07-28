const express = require("express")


const {home, getUsers, editUser, deleteUser} = require("../controller/userController.js")

const {createUser} = require("../controller/userController.js")
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);


module.exports = router;