import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/header';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Header />} />
        </Routes>
    );
}

export default MainRoutes;
