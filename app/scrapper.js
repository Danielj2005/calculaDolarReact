import https from 'https'
import axios from 'axios' 
import cheerio from 'cheerio' 

// Crea un agente HTTPS para ignorar la verificación del certificado
const agent = new https.Agent({
    rejectUnauthorized: false
});


async function getPrices() {
    try {
        const url = "https://www.bcv.org.ve/";
        // Pasa el agente en la configuración de la petición de axios
        const { data: html } = await axios.get(url, { httpsAgent: agent });
        
        const $ = cheerio.load(html);

        const usdElement = $('#dolar strong');
        const euroElement = $('#euro strong');

        let usdPrice = null;

        if (usdElement.length > 0) {
            let usdText = usdElement.text().trim();

            usdText = usdText.replace(",", ".");

            usdPrice = parseFloat(usdText.replace(/[^0-9.]/g, ''));
        }

        let euroPrice = null;

        if (euroElement.length > 0) {
            let euroText = euroElement.text().trim();

            euroText = euroText.replace(",", ".");

            euroPrice = parseFloat(euroText.replace(/[^0-9.]/g, ''));
        }

        return { usd: usdPrice.toFixed(2), euro: euroPrice.toFixed(2) };

    } catch (error) {
        console.error('Error fetching data from BCV: ' + error.message);
        throw new Error('No se recibieron los precios del recurso. - Could not retrieve prices from the source.');
    }
}

export { getPrices };