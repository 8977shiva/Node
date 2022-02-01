/* 
 we  have secprated the express and sever 

*/
import https  from 'https';
import {app} from './app.js';

const PORT = process.env.PORT || 8000;

const server = https.createServer(app);

server.listen(PORT, () => {
    console.log(`server runing on port ${PORT}..`);
})


