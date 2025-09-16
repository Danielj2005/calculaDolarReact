// styles CSS
import '../assets/css/CalculatorApp.css';
import '../assets/css/neonSwitch.css'

// components
import { Container } from 'react-bootstrap';


function RegisterClientApiDollar() {
    return (
        
        <Container className="d-flex justify-content-center align-items-center p-3">

            <div className="form-container text-bg-danger text-center justify-content-center align-items-center d-flex">
                <h1>Registrar Cliente - API Dólar</h1>
                <form className="row justify-content-center align-items-center text-start">
                    <div className="col-12 form-group mb-2">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <div className="col-12 form-group mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="col-12 form-group mb-2" >
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" required />
                    </div>

                    <div className="text-center col-12 d-flex justify-content-center align-items-center">
                        <button
                            className="form-submit-btn text-white"
                            type="submit">
                                Registrar
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default RegisterClientApiDollar
