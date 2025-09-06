import { Container, Card } from 'react-bootstrap';

function Calculator() {
    return (
        <>
            <Container className="container col-12 text-center justify-content-center align-items-center d-flex">

                <Card style={{ width: '28rem' }}>

                    <Card.Header className="bg-primary text-white text-center py-4 rounded-top-3">
                        <Card.Title>CalculaDolar</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">BCV - Dolar</Card.Subtitle>
                    </Card.Header>
                        
                    <Card.Body className=" p-4">
                        <Container className="d-flex align-items-center mb-4 pb-3 border-bottom">
                            <Container className="col-12 col-md-6 justify-content-between align-items-center d-flex mb-4">
                                <Container className="p-3 bg-success-subtle rounded-circle text-center text-start">
                                    <i className="fa-solid fa-calculator text-primary fs-4"></i>
                                </Container>

                                <Container className="text-start col ms-3">
                                    <h5 className="col-12 mb-0">Calcular Divisas</h5>
                                    <p className="col-12 text-muted mb-0">ingresa una cantidad</p>
                                    <input className="col-12 form-control p-2" type="text" name="cantidad" id="cantidad"/> 
                                </Container>
                            </Container>    
                        </Container>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                        <Card.Link href="#">Card Link</Card.Link>
                        
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
{/* 
                <Container className="card shadow-lg border-0 rounded-3">
                    <Container className="card-header bg-primary text-white text-center py-4 rounded-top-3">
                        <h4 className="mb-0">CalculaDolar</h4>
                        <p className="mb-0 text-white-75">BCV</p>
                    </Container>
                    <div className="card-body p-4">
                        <div className="row d-flex align-items-center mb-4 pb-3 border-bottom">

                            <div className="col-12 col-md-6 justify-content-between align-items-center d-flex mb-4">
                                <div className="p-3 bg-success-subtle rounded-circle text-center text-start">
                                    <i className="fa-solid fa-calculator text-primary fs-4"></i>
                                </div>

                                <div className="text-start col ms-3">
                                    <h5 className="col-12 mb-0">Calcular Divisas</h5>
                                    <p className="col-12 text-muted mb-0">ingresa una cantidad</p>
                                    <input className="col-12 form-control p-2" type="text" name="cantidad" id="cantidad"/> 
                                </div>
                            </div>    

                            <div className="col-12 col-md-6 row ms-2">
                                <div className="mb-2 col col-12 text-start">
                                    <h5 className="col-12 mb-0 fas fa-dollar-sign text-success">&nbsp; USD</h5>
                                    <span className="fs-4 fw-bold text-dark">Bs.</span>
                                    <span id="calculateDolarPrice" className="fs-4 fw-bold text-dark"></span>
                                </div>
                            
                                <div className="mb-2 ms-auto col-12 text-start">
                                    <h5 className="col-12 mb-0 fas fa-euro-sign text-success">&nbsp; EUR</h5>
                                    <span className="fs-4 fw-bold text-dark">Bs.</span>
                                    <span id="calculateEuroPrice" className="fs-4 fw-bold text-dark"></span>
                                </div>
                            </div>


                        </div>
                        <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                            <div className="p-3 bg-success-subtle rounded-circle me-3">
                                <i className="fas fa-dollar-sign text-success fs-4"></i>
                            </div>
                            <div>
                                <h5 className="mb-0">Dólar USD</h5>
                                <p className="text-muted mb-0">Precio hoy</p>
                            </div>
                            <div className="ms-auto text-end">
                                <span className="fs-4 fw-bold text-dark">Bs.</span>
                                <span id="dolarPrice" className="fs-4 fw-bold text-dark"> </span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="p-3 bg-info-subtle rounded-circle me-3">
                                <i className="fas fa-euro-sign text-info fs-4"></i>
                            </div>
                            <div>
                                <h5 className="mb-0">Euro EUR</h5>
                                <p className="text-muted mb-0">Precio hoy</p>
                            </div>
                            <div className="ms-auto text-end">
                                <span className="fs-4 fw-bold text-dark">Bs.</span>
                                <span id="eurPrice" className="fs-4 fw-bold text-dark"> </span>
                            </div>
                        </div>

                        <div className="m-5 text-center justify-content-center d-flex align-items-center">
                            <button type="button" className="btn btn-primary">Actualizar</button>
                        </div>
                    </div>
                </Container> */}
            </Container>
        </>
    )
}

export default Calculator
