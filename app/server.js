import express from 'express' // framework para crear servidor con node.js
import cors from 'cors' // cors ayuda a evitar el error por peticion de origenes desconocidos
import { getPrice } from './scrapper.js'

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


app.get('/getPriceBCV', async (req, res) => {
    // res.sendFile(htmlFilePath);
    try {
        const { coin } = req.query;
        res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','Application/json');

        const prices = await getPrice(coin);

        if (prices[coin] === null) {
            res.status(402).json({
                message: 'No se pudieron obtener los precios de las divisas.',
                data: null
            });
        } else {
            res.json(prices);
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error en el servidor.',
            error: error.message,
            data: null
        });
    }
});


app.listen(PORT, () => {
    console.log(`API está corriendo en http://localhost:${PORT}`);
    console.log(`Prueba la API visitando http://localhost:${PORT}/usdToBs en tu navegador.`);
});


