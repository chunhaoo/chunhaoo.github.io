import { useSelector } from 'react-redux';
import './App.scss';
import Header from './shared/components/header/header';
import MainRoutes from './shared/components/routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const themeMode = useSelector((state: any) => state.themeMode.value);

    return (
        <BrowserRouter>
            <main className={`App ${themeMode}`}>
                <section className="header">
                    <div className="content-layout">
                        <Header />
                    </div>
                </section>

                <section className="content">
                    <div className="content-layout">
                        <MainRoutes />
                    </div>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
