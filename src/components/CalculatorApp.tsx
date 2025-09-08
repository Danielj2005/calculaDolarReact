
import { Container} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap
import '../assets/css/CalculatorApp.css';

// import { toast, ToastContainer, Bounce } from 'react-toastify';
import { ToastContainer, Bounce } from 'react-toastify';
// import Input from './Input';
import NeonForm from './Form';

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

    
    return (
        <>
            <Container className="container justify-content-center align-items-center d-flex p-4">
                <NeonForm 
                    iconTitle={<Icon.Calculator />} 
                    titleForm=" CalculaDolar" 
                    titleClassForm=" CalculaDolar"

                    subTitleForm="Dolar - BCV"
                    subTitleClassForm="text-center"

                    pharaForm="Selecciona una divisa e Ingresa una cantidad para calcular su cotización."
                    pharaClassForm="col-12 text-white mb-2"

                    priceDollarBs={155}
                    priceDollar={1}
                />

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
