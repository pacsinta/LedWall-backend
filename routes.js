const express = require('Express');

var router = express.Router();


var updated = false;  //If display need to be updated its true
router.get("/updated", (req, res)=>{
    res.send(updated);
});

router.put("/updated", (req, res)=>{
    updated = req.body.updated;
    res.sendStatus(200);
});



//Display modes
const modes = {
    TEXT: 0,
    IMAGE: 1
};


//Mode routes
var curMode = modes.TEXT;
router.get("/mode", (req, res)=>{
    res.send(curMode);
});

router.put("/mode", (req, res) =>{

});


//Display image routes
router.get("/image");
router.put("/image")


//Display text routes
router.get("/text");
router.put("/text");



module.exports = router;