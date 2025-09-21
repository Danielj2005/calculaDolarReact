import * as React from 'react'
import '../assets/css/CalculatorApp.css';
import '../assets/css/neonSwitch.css'
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap
import { toast, Bounce } from 'react-toastify';
import axios from 'axios'
import { useState, useEffect } from 'react';

function CalculatorApp() {
    // Estados con tipos explícitos
    const [cant, setCant] = useState<number>(1);
    const [divisa, setDivisa] = useState<boolean>(false);
    const [result, setResult] = useState<number | null>(null);
    const [usdPrice, setUsdPrice] = useState<number | null>(null);

    const baseCotizacion = 1;

    // Función para calcular el resultado
    const calculateResult = (amount: number, usd: number | null, isDivisa: boolean) => {
        if (!usd) return null;
        return Number(isDivisa ? (amount / usd) : (amount * usd));
    };

    // Manejar cambio en el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (isNaN(value) || value <= 0) {
        setCant(0);
        setResult(0);
        return;
        }
        setCant(value);
        setResult(calculateResult(value, usdPrice, divisa));
    };

    // Cambiar tipo de divisa
    const handleClick = () => {
        const newDivisa = !divisa;
        setDivisa(newDivisa);
        setResult(calculateResult(cant, usdPrice, newDivisa));
    };

    // Prevenir submit del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Si quieres que el botón actualice la cotización, puedes volver a calcular el resultado aquí
        setResult(calculateResult(cant, usdPrice, divisa));
        toast.info('Cotización actualizada', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce
        });
    };

    useEffect(() => {
        // Llamada a la API para obtener el precio del USD
        axios.get('http://localhost:3000/getPriceBCV', { params: { coin: "usd" } })
        .then(response => {
            const precio = Number(response.data.usd);
            setUsdPrice(precio);
            setResult(calculateResult(cant, precio, divisa));
            if (response.data !== null) {
            toast.success(`Cotizaciones actualizadas`, {
                position: "top-right",
                autoClose: 5000,
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
            theme: "dark",
            transition: Bounce,
            });
        });
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center p-3">
        <div className="form-container text-bg-danger text-center justify-content-center align-items-center d-flex">
            <h1 className="CalculaDolar">
            <Icon.Calculator /> {" CalculaDivisa"}
            </h1>
            <p className="text-center fw-bold fs-4">Dolar - BCV</p>
            <p className="text-center">
            <span className="text-center text-success fw-bold fs-4">{`$. ${baseCotizacion} - `}</span>
            <span className="text-center text-danger fw-bold fs-4">{`BS. ${usdPrice ?? '...'}`}</span>
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
