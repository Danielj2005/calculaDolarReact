import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import CalculatorApp from './components/CalculatorApp';
import RegisterClientApiDollar from './components/RegisterClientApiDollar'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CalculatorApp/>}></Route>
                    {<Route path="/registerClient" element={<RegisterClientApiDollar/>}></Route>}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
