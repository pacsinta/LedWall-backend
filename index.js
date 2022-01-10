'use strict';

const httpPORT = 4000;



const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');


const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: "1kb" }));
app.use(express.json({ limit: "1kb" }));


app.use(express.json());
app.use(routes);

app.listen(httpPORT, () => {
    console.log(`LedWall-backend is running on http on worker ${process.pid}`);
    console.log(`Port: ${httpPORT}`);
});