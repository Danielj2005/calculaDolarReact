// styles CSS
import '../assets/css/CalculatorApp.css';
import '../assets/css/neonSwitch.css'

// components
import { Container, Row, Col} from 'react-bootstrap';

// icons library
import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap

// alerts library
// import { toast, ToastContainer, Bounce } from 'react-toastify';
import { ToastContainer, Bounce } from 'react-toastify';

// toast(`Error al obtener los mensajes del chat, recargue la página por favor.`, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: false,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     transition: Bounce,
// });


function CalculatorApp() {
    
    // const checkOptionsIcons = [ <Icon.CurrencyDollar /> ,"BS", <Icon.CurrencyEuro /> ];
    const priceDollarBs = 170
    const priceDollar = 1
    
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <div className="form-container text-bg-danger text-center justify-content-center align-items-center d-flex">
                    
                    <h1 className="CalculaDolar"> {<Icon.Calculator />} {" CalculaDolar"} </h1>
                    
                    <p className="text-center"> 
                        <p className="text-center fw-bold fs-4">Dolar - BCV</p>
                        <span className="text-center text-success fw-bold fs-4">{`$. ${priceDollar} - `}</span>
                        <span className="text-center text-danger fw-bold fs-4">{`BS. ${priceDollarBs}`}</span> 
                    </p>
                    
                    <p className="col-12 text-white mb-2">Selecciona una opción.</p>

                    <Row>
                        <Col xs="12" sm="12" md="12" xl="12" className="text-center d-flex align-items-center justify-content-around">
                            <span className="text-start text-success fw-bold fs-4">USD</span>

                            <span className="text-center text-danger fw-bold fs-4"> BS </span>
                        </Col>

                        <Col xs="12" sm="12" md="12" xl="12">
                            <label className="switch-button">
                                <div className="switch-outer">
                                    <input
                                        id="switchDivisa"
                                        type="checkbox"
                                        name="switchDivisa"
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
                                placeholder="Ingresa un cantidad"/>
                        </div>
                        <div className="text-center col-12 d-flex justify-content-center align-items-center">
                            <button className="form-submit-btn w-auto text-white" type="submit">Actualizar Cotización</button>
                        </div>
                    </form>

                </div>

                <ToastContainer 
                    position="top-right"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                    autoClose={3000} />

            </Container>
        </>
    )
}

export default CalculatorApp
