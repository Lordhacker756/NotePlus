const express = require("express");
const router = express.Router();

//Now we will use router.get insted of app.get

router.get('/', (req, res) => {
    res.status(200).send([])
})

module.exports = router