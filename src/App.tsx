import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Calculator from './components/Calculator';
// import Register from './components/register;'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Calculator/>}></Route>
                    {/* <Route path="/register" element={<Register/>}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
