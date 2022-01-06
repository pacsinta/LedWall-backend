const express = require('Express');
const { sendStatus } = require('express/lib/response');
require('dotenv').config();

var router = express.Router();


var updated = false;  //If display need to be updated its true
router.get("/updated", (req, res)=>{
    res.json({updated: updated});
});


//only needed for the esp32
router.put("/updated", (req, res)=>{
    try{
        pwd = req.body.pwd;
        if(pwd == process.env.PWD){
            updated = false;
            res.sendStatus(200);
        }else{
            res.sendStatus(403);
        }
    }catch{
        res.sendStatus(400);
    }
});

//Mode routes
var curMode = 0;
// mode 0 = text
// mode 1 = const image


router.get("/mode", (req, res)=>{
    res.json({mode: curMode});
});

router.put("/mode", (req, res) =>{
    try{
        pwd = req.body.pwd;
        if(pwd == process.env.PWD){
            curMode = res.body.mode;
            updated = true;
            res.sendStatus(200);
        }else{
            res.sendStatus(403);
        }
    }catch{
        res.sendStatus(400);
    }
});


//Display image routes
var image = [8][10];
router.get("/image", (req, res) =>{
    
});
router.put("/image", (req, res) =>{
    try{
        pwd = req.body.pwd;
        if(pwd == process.env.PWD){
            updated = true;
            const rawData = req.body.image;

            res.sendStatus(200);
        }else{
            res.sendStatus(403);
        }
    }catch{
        res.sendStatus(400);
    }
})


//Display text routes
var text = "";

//respond with the text to display
router.get("/text", (req, res) =>{
    res.json({text: text});
});

//change the displayed text
router.put("/text", (req, res) =>{
    try{
        pwd = req.body.pwd;
        console.log(pwd);
        if(pwd == process.env.PWD){
            updated = true;
            text = req.body.text;
            res.sendStatus(200);
        }else{
            res.sendStatus(403);
        }
    }catch{
        res.sendStatus(400);
    } 
});



module.exports = router;