import express from 'express' // framework para crear servidor con node.js
import cors from 'cors' // cors ayuda a evitar el error por peticion de origenes desconocidos


const app = express();
const PORT = process.env.PORT || 3000;



app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}));
