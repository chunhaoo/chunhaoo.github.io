import './App.scss';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Footer from './shared/components/footer/footer';
import Header from './shared/components/header/header';
import MainRoutes from './shared/components/routes/routes';

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

                <section className="flex flex-col flex-grow overflow-y-auto">
                    <section className="content">
                        <div className="content-layout">
                            <MainRoutes />
                        </div>
                    </section>

                    <section className="footer">
                        <div className="content-layout">
                            <Footer />
                        </div>
                    </section>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
