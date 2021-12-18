const express = require('Express');

var router = express.Router();


var updated = false;  //If display need to be updated its true
router.get("/updated", (req, res)=>{
    res.json({updated: updated});
});

router.put("/updated", (req, res)=>{
    updated = req.body.updated;
    res.sendStatus(200);
});




//Mode routes
var curMode = 0;
// mode 0 = text
// mode 1 = const image


router.get("/mode", (req, res)=>{
    res.json({mode: curMode});
});

router.put("/mode", (req, res) =>{
    curMode = res.body.mode;
    res.sendStatus(200);
});


//Display image routes
var image = [][]
router.get("/image", (req, res) =>{

});
router.put("/image", (req, res) =>{
    updated = true;
})


//Display text routes
var text = "";

//respond with the text to display
router.get("/text", (req, res) =>{
    res.json({text: text});
});

//change the displayed text
router.put("/text", (req, res) =>{
    updated = true;
    text = req.body.text;

    res.sendStatus(200);
});



module.exports = router;