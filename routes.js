const express = require('Express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


//load private key
dotenv.config();


//generate new jwt token
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
}


var router = express.Router();


var updated = false;  //If display need to be updated its true
router.get("/updated", (req, res)=>{
    res.json({updated: updated});
});

router.put("/updated", authenticateToken, (req, res)=>{
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

router.put("/mode", authenticateToken, (req, res) =>{
    curMode = res.body.mode;
    res.sendStatus(200);
});


//Display image routes
var image = [8][10];
router.get("/image", (req, res) =>{
    var 
});
router.put("/image", authenticateToken, (req, res) =>{
    updated = true;
    const rawData = req.body.image;

    res.sendStatus(200);
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