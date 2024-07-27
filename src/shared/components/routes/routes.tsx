import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/header';

function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;
