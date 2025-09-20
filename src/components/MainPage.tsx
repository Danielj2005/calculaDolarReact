import { ToastContainer, Bounce } from 'react-toastify';
import { Row, Col} from 'react-bootstrap';
// import CotizacionBCV from './CotizacionBCV';
import CalculatorApp from './CalculatorApp';

function MainPage() {
    return (
        <>
            <Row>
                {/* <Col xs="12" sm="12" md="6" xl="6" className="text-center d-flex align-items-center justify-content-center p-2">
                    <CotizacionBCV />
                </Col> */}

                <Col xs="12" sm="12" md="12" xl="12" className="text-center d-flex align-items-center justify-content-center">
                    <CalculatorApp />
                </Col>

            </Row>

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
        </>
    )
}

export default MainPage
