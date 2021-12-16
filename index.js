const express = require('Express');
const helmet = require('Helmet');
const cluster = require('cluster');
const os = require("os");
const routes = require('./routes');

function run(){
    const app = express();

    app.use(helmet);
    app.use(express.json);

    app.use(routes);

    const httpPORT = 5000;

    app.listen(httpPORT, ()=>{
        console.log(`LedWall-backend is running on http on worker ${process.pid}`);
    });
}

//const clusterWorkerSize = os.cpus().length
const clusterWorkerSize = 1

if (clusterWorkerSize > 1){
    if (cluster.isMaster) {
        console.log('The system has '+clusterWorkerSize+' cores');
        for (let i=0; i < clusterWorkerSize; i++) {
          cluster.fork()
        }
    
        cluster.on("exit", function(worker) {
          console.log("Worker", worker.id, " has exitted.")
        })
    }
    else{
        run();
    }
}else{
    console.log('The system has only 1 core');
    run();
}