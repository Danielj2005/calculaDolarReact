import '../assets/css/neonSwitch.css'
import { Row, Col} from 'react-bootstrap';

// se definen los tipos de datos para cada propiedad 
type switchProps = {
    inputName?: string
    inputId?: string
}


function NeonSwitch(props: switchProps) {
    
    const {inputName, inputId, handleClick} = props;

    return (
        <>  
            <Row>
                <Col className="text-center">
                    <span className="text-start text-success fw-bold fs-4">USD</span>
                </Col>
                <Col>
                    <label className="switch-button">
                        <div className="switch-outer">
                            <input
                                id={inputId}
                                type="checkbox"
                                name={inputName}
                                onClick={handleClick? handleClick : ''}
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
        </>
    )
}

export default NeonSwitch
