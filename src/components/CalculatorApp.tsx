import * as React from 'react'
import '../assets/css/CalculatorApp.css';
import '../assets/css/neonSwitch.css'
import { Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap
import { toast, Bounce } from 'react-toastify';
import axios from 'axios'
import { useState, useEffect, type ReactEventHandler } from 'react';


function CalculatorApp() {
    const [cant, setCant] = useState(null)
    const [divisa, setDivisa ] = useState(false)
    const [result, setResult] = useState(null)
    const [prices, setPrices] = useState({
        usd: null
    })

    const baseCotizacion = 1;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =  parseFloat(e.target.value)
        let data;

        if (divisa) {
            data = parseFloat(value / prices.usd).toFixed(2)
            setResult(data)
        }else{
            data = parseFloat(value * prices.usd).toFixed(2)
            setResult(data)
        }
        setCant(value)
    }

    const handleClick = () => {
        setDivisa(divisa ? false : true);
    }
    

    useEffect(() => {


        axios.get('http://localhost:3000/getPriceBCV',{params:  { coin: "usd" } })
            .then(response => {

                // pricesBCV = JSON.parse(response.data);
                setPrices(response.data);
                setResult(prices.usd)
                setCant(1)

                if (response.data !== null) {
                    toast.success(`Cotizaciones actualizadas`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
                toast.error(`No se pudieron obtener los precios de las divisas, recargue la página por favor.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            });
    }, [])
    
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <div className="form-container text-bg-danger text-center justify-content-center align-items-center d-flex">
                    
                    <h1 className="CalculaDolar"> {<Icon.Calculator />} {" CalculaDivisa"} </h1>
                    
                    <p className="text-center fw-bold fs-4">Dolar - BCV</p>
                    <p className="text-center"> 
                        <span className="text-center text-success fw-bold fs-4">{`$. ${baseCotizacion} - `}</span>
                        <span className="text-center text-danger fw-bold fs-4">{`BS. ${prices.usd}`}</span> 
                    </p>
                    
                    <p className="col-12 text-white mb-2">Selecciona una opción para saber su cotización.</p>

                    <Row>
                        <Col xs="12" sm="12" md="12" xl="12" className="text-center d-flex align-items-center justify-content-around">
                            <span className="text-start text-success fw-bold fs-4">{`USD ${divisa ? result : cant }`}</span>

                            <span className="text-center text-danger fw-bold fs-4">{`BS ${divisa ? cant : result }`}</span>
                        </Col>

                        <Col xs="12" sm="12" md="12" xl="12">
                            <label className="switch-button">
                                <div className="switch-outer">
                                    <input
                                        id="switchDivisa"
                                        type="checkbox"
                                        name="switchDivisa"
                                        checked={divisa}
                                        onClick={handleClick}
                                    />

                                    <div className="button">
                                        <span className="button-toggle"></span>
                                        <span className="button-indicator"></span>
                                    </div>
                                </div>
                            </label>
                        </Col>
                    </Row>

                    <form className="row justify-content-center align-items-center">
                        <div className="form-group col-12 text-start ">
                            <label className="text-white">Ingresa la cantidad a calcular</label>
                            <input 
                                type="text" 
                                id="cantidad" 
                                name="cantidad" 
                                required 
                                placeholder="Ingresa un cantidad"
                                onChange={handleChange}/>
                        </div>
                        <div className="text-center col-12 d-flex justify-content-center align-items-center">
                            <button className="form-submit-btn w-auto text-white" type="submit">Actualizar Cotización</button>
                        </div>
                    </form>

                </div>

            </Container>
        </>
    )
}

export default CalculatorApp
