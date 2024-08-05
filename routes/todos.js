const express = require("express");
const router = express.Router();

const todos = [{id: 1, name: "Do something" , completed: false}]

router.get("/" , function(req , res , next ){
    res.json(todos);
})

module.exports = router;