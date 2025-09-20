import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import MainPage from './components/MainPage';
import RegisterClientApiDollar from './components/RegisterClientApiDollar'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    {<Route path="/registerClient" element={<RegisterClientApiDollar/>}></Route>}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
