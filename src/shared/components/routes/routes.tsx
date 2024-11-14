import { Navigate, Route, Routes } from 'react-router-dom';
import BasicForm from 'src/pages/form/basic-form';
import Home from 'src/pages/home/home';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/form" element={<BasicForm />} />
        </Routes>
    );
}

export default MainRoutes;
