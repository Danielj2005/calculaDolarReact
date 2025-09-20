import { useEffect, useState } from 'react';
import axios from 'axios'
import { toast, Bounce } from 'react-toastify';
import { Container } from 'react-bootstrap';


function CotizacionBCV() {

    const [pricesBCV, setpricesBCV] = useState( [ ] );
    
    const coinsBCV = [
        ["USD"],
        ["EURO"],
        ["RUBLO (RUB)"],
        ["LIRA TURCA (TRY)"],
        ["YUAN (CNY)" ]
    ];
    
    const COIN = ""

    useEffect(() => {


        axios.get('http://localhost:3000/getPriceBCV',{params:  { coin: COIN } })
            .then(response => {

                // pricesBCV = JSON.parse(response.data);
                setpricesBCV(Object.values(response.data));


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

    pricesBCV.map((price, index) => ( coinsBCV[index].push(price) ));
    


    return (
        <>
            <Container className="d-flex justify-content-center align-items-center p-2">
                <div className="form-container text-bg-danger text-center justify-content-center d-flex">

                    <span className="col-12 text-center fw-bold fs-4 bg-white rounded p-1"> 
                        <img src="./src/assets/img/BCV_logo.svg.png" width="80px" />
                    </span>

                    <h3 className="CalculaDolar">{"Cotizaciones del BCV"} </h3>
                    <span className="col-12 text-center text-success fw-bold fs-5"> {` 20/09/25`} </span>

                    <div className="row justify-content-center align-items-center ">

                        <div className="col-12 col-md-12 text-center mb-1">
                            { 
                                coinsBCV.map( (value) => (
                                    <p className="col-12 fw-bold fs-5 border-bottom border-2 d-flex justify-content-between align-items-center">
                                        <span className="text-success"> {` ${value[0]}`}</span>
                                        <span className="text-danger"> {` BS. ${value[1]}`}</span>
                                    </p>
                                )) 
                            }
                        </div>

                    </div>
                </div>
            </Container>        
        </>
    )
}

export default CotizacionBCV
