const express = require("express");
const router = express.Router();

//Now we will use router.get insted of app.get

router.get('/', (req, res) => {
    res.status(200).json({
        msg: "Hey there sexy!"
    })
})

module.exports = router