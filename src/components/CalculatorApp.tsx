import React, { useState, useEffect} from 'react';
import '../assets/css/CalculatorApp.css';
import '../assets/css/neonSwitch.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap
import { toast, Bounce } from 'react-toastify';
import axios from 'axios'





function CalculatorApp() {
    // Estados con tipos explícitos
    const [cant, setCant] = useState<number>(1);
    const [divisa, setDivisa] = useState<boolean>(false);
    const [result, setResult] = useState<number | null>(null);

    const [firstCharge, setFirstCharge] = useState<boolean>(true);

    const [pricesBCV, setpricesBCV] = useState<number | null>(null);
    // setpricesBCV(178)
    const baseCotizacion = 1;

    // Función para calcular el resultado
    const calculateResult = (amount: number, usd: number | null, isDivisa: boolean) => {
        if (!usd) return null;
        const result = (isDivisa ? (amount / usd) : (amount * usd));
        const data = result.toFixed(2)
        return parseFloat(data);
    };

    // Manejar cambio en el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (isNaN(value) || value <= 0) {
            setCant(1);
            setResult(0);
            return;
        }
        setCant(value);
        setResult(calculateResult(value, pricesBCV, divisa));
    };

    // Cambiar tipo de divisa
    const handleClick = () => {
        const newDivisa = !divisa;
        setDivisa(newDivisa);
        setResult(calculateResult(cant, pricesBCV, newDivisa));
    };

    // obtener la tasa del dolar bcv
    
    const getPrice = () => {
        try {
            axios.get('https://dollarapi.onrender.com/prices')
                .then(response => {
                    // pricesBCV = JSON.parse(response.data);

                    setpricesBCV(response.data.data.usd);

                    if (response.data !== null) {
                        toast.success(`Cotización actualizada ${response.data.data.usd}`, {
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

            } catch (error) {
                console.error('An error occurred:', error);
            }
    }

    
    // Prevenir submit del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Si quieres que el botón actualice la cotización, puedes volver a calcular el resultado aquí
        try {
            getPrice();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    if (firstCharge) {
        // Llamada a la API para obtener el precio del USD
        getPrice();
        setFirstCharge(!firstCharge);
    }

    const cantCommon = [5,10,20,50,100]; // cantidaddes comunes para calcular

    const handlerCantidadComun = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const data = parseInt(target.value)
        setCant(data);
    }

    useEffect(() => {
        const resultado = calculateResult(cant, pricesBCV, divisa)
        setResult(resultado);
    }, [cant, pricesBCV, divisa])
    

    return (
        <Container className="d-flex justify-content-center align-items-center p-3">
            <div className="form-container text-bg-danger text-center justify-content-center align-items-center d-flex">
                <h1 className="CalculaDolar">
                    <Icon.Calculator /> {" CalculaDivisa"}
                </h1>
                <p className="text-center fw-bold fs-4">Dolar - BCV</p>
                <p className="text-center">
                    <span className="text-center text-success fw-bold fs-4">{`$. ${baseCotizacion} - `}</span>
                    <span className="text-center text-danger fw-bold fs-4">{`BS. ${pricesBCV ?? '...'}`}</span>
                </p>
                <p className="col-12 text-white mb-2">Selecciona una opción para saber su cotización.</p>
                <Row>
                    <Col xs="12" className="text-center d-flex align-items-center justify-content-around">
                        <span className="text-start text-success fw-bold fs-4">{`USD ${divisa ? result ?? 0 : cant}`}</span>
                        <span className="text-center text-danger fw-bold fs-4">{`BS ${divisa ? cant : result ?? 0}`}</span>
                    </Col>

                    <Col xs="12">
                        <label className="switch-button">
                            <div className="switch-outer">
                                <input
                                    id="switchDivisa"
                                    type="checkbox"
                                    name="switchDivisa"
                                    checked={divisa}
                                    onChange={handleClick}
                                />
                                <div className="button">
                                    <span className="button-toggle"></span>
                                    <span className="button-indicator"></span>
                                </div>
                            </div>
                        </label>
                    </Col>

                    <Col xs="12" className="text-center mt-2 d-flex align-items-center justify-content-around">
                        {
                            cantCommon.map((cantidad, index)=>(
                                <div className="text-center d-flex justify-content-center align-items-center" key={index}>
                                    <button onClick={handlerCantidadComun} value={cantidad} className="form-submit-btn w-auto text-white border-2 border-success" type="submit">{cantidad}</button>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
                <form className="row justify-content-center align-items-center" onSubmit={handleSubmit}>
                    <div className="form-group col-12 text-start ">
                        <label className="text-white">Ingresa la cantidad a calcular</label>
                        <input
                            type="number"
                            id="cantidad"
                            name="cantidad"
                            required
                            min="0"
                            step="any"
                            placeholder="Ingresa una cantidad"
                            value={cant}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center col-12 d-flex justify-content-center align-items-center">
                        <button className="form-submit-btn w-auto text-white" type="submit">Actualizar Cotización</button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default CalculatorApp;
