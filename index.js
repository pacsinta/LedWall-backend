'use strict';

const httpPORT = 4000;
const httpsPORT = 4001;



const express = require('express');
const helmet = require('helmet');
const fs = require('fs');
const https = require('https');
const http = require('http');
const routes = require('./routes');


const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: "1kb" }));
app.use(express.json({ limit: "1kb" }));


app.use(express.json());
app.use(routes);


//HTTP
const httpServer = http.createServer(app);
httpServer.listen(httpPORT, () => {
	console.log('HTTP Server running on port 80');
});



//HTTPS

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/cstcompany.ddns.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/cstcompany.ddns.net/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/cstcompany.ddns.net/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(httpsPORT, () => {
	console.log(`LedWall-backend is running on http on worker ${process.pid}`);
    console.log(`Port: ${httpsPORT}`);
});