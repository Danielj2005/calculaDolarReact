// import * as Icon from 'react-bootstrap-icons'; // iconos de bootstrap

import type { ReactNode } from 'react';
import '../assets/css/neonSwitch.css'
import { Row, Col} from 'react-bootstrap';



// se definen los tipos de datos para cada propiedad 
type NeonFormProps = {
    iconTitle?: ReactNode;
    titleForm?: string;
    titleClassForm?: string;
    subTitleForm?: string;
    subTitleClassForm?: string;
    pharaForm?: string;
    pharaClassForm?: string;
    priceDollarBs?: number;
    priceDollar?: number;
}

function NeonForm(props: NeonFormProps) {
    
    const {
        iconTitle, titleForm, titleClassForm, 
        subTitleForm, subTitleClassForm,
        pharaForm, pharaClassForm,
        priceDollarBs, priceDollar
    } = props;
    
    return (
        <div className="form-container text-bg-danger text-center">
            
            <h1 className={titleClassForm}>
                {iconTitle? iconTitle : ' ' }
                {titleForm}
            </h1>

            <p className={subTitleClassForm}> 
                <span className="text-center fw-bold fs-4">{`${subTitleForm}`}</span> 
                <br/>  
                <span className="text-center text-success fw-bold fs-4">{`$. ${priceDollar} - `}</span>
                <span className="text-center text-danger fw-bold fs-4">{`BS. ${priceDollarBs}`}</span> 
            </p>

            <p className={pharaClassForm}> {pharaForm} </p>

            <Row>
                <Col className="text-center">
                    <span className="text-start text-success fw-bold fs-4">USD</span>
                </Col>
                <Col>
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
                <Col className="text-center">
                    <span className="text-center text-danger fw-bold fs-4">BS</span>
                </Col>
            </Row>


            <form className="form row justify-content-center align-items-center text-center">
                <div className="form-group col-12 text-start">
                    <label >Ingresa la cantidad a calcular</label>
                    <input type="text" id="cantidad" name="cantidad" required />
                </div>
                <div className="text-center col-12 d-flex justify-content-center align-items-center">
                    <button className="form-submit-btn w-auto" type="submit">Actualizar Cotización</button>
                </div>
            </form>
        </div>
    )
}

export default NeonForm
