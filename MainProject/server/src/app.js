import express from 'express';
import cors from 'cors';
import plantsRouter from './routes/planets/planets.router.js';

const app = express();  

// middleware's
app.use(cors({
    origin:'http://localhost:3000', // whitelisting this origin so that it can access the API's
}))
app.use(express.json());  // to accpect json based request 
app.use(plantsRouter);

export default app;

 
