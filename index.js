'use strict';

const httpPORT = 5000;



const express = require('Express');
const helmet = require('Helmet');
const routes = require('./routes');


const app = express();

app.use(helmet());
app.use(express.json());


app.listen(httpPORT, () => {
    console.log(`LedWall-backend is running on http on worker ${process.pid}`);
});