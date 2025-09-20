import https from 'https'
import axios from 'axios' 
import * as cheerio from 'cheerio' 

// Crea un agente HTTPS para ignorar la verificación del certificado
const agent = new https.Agent({
    rejectUnauthorized: false
});

const cleanPrices = (elementName) => {

    let Text = elementName.text().trim();

    Text = Text.replace(",", ".");

    let Price = parseFloat(Text.replace(/[^0-9.]/g, ''));

    Price = Price.toFixed(2);
    
    return Price;
}

// scrapper para obtener el precio del dolar en base al bcv
export async function getPrice(coins="") {
    try {
        const url = "https://www.bcv.org.ve/";
        // Pasa el agente en la configuración de la petición de axios
        const { data: html } = await axios.get(url, { httpsAgent: agent });
        
        const $ = cheerio.load(html);
        // se definen los elementos htm que contienen los precios de las distintas monedas
        const usdElement = $('#dolar strong');
        const euroElement = $('#euro strong');
        const rubElement = $('#rublo strong');
        const tryElement = $('#lira strong');
        const cnyElement = $('#yuan strong');

        //  se iniicializan las variables que contendran las cotizaciones del BCV
        let usdPrice = null;
        let euroPrice = null;
        let rubPrice = null;
        let tryPrice = null;
        let cnyPrice = null;
        
        // se les asigna un valor a las variables con las tasas recibidas del BCV
        usdPrice = usdElement.length > 0 ? cleanPrices(usdElement) : null;
        euroPrice = usdElement.length > 0 ? cleanPrices(euroElement) : null;
        rubPrice = usdElement.length > 0 ? cleanPrices(rubElement) : null;
        tryPrice = usdElement.length > 0 ? cleanPrices(tryElement) : null;
        cnyPrice = usdElement.length > 0 ? cleanPrices(cnyElement) : null;

        //  se decide que tasa cotizar en base a la moneda solicitada del BCV
        switch (coins) {
            case "usd":
                return {usd: usdPrice};
            case "euro":
                return {euro: euroPrice};
            case "rublo":
                return {rublo: rubPrice};
            case "liraTurca":
                return {liraTurca: tryPrice};
            case "yuan":
                return {yuan: cnyPrice};
            default:
                return { 
                    usd: usdPrice, 
                    euro: euroPrice,
                    rublo: rubPrice,
                    liraTurca: tryPrice,
                    yuan: cnyPrice,
                }; 
        }

    } catch (error) {
        console.error('Error fetching data from BCV: ' + error.message);
        throw new Error('No se recibieron los precios del recurso. - Could not retrieve prices from the source.');
    }
}