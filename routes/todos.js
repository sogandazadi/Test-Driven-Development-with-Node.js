const express = require("express");
const router = express.router();

router.get("/" , function(req , res , next ){
    res.send("respond with a resource");
})

module.exports = router;