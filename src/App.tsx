import './App.scss';
import Header from './shared/components/header/header';
import MainRoutes from './shared/components/routes/routes';
import { getThemeMode } from './shared/utils/storage.service';

function App() {
    return (
        <main className={`App ${getThemeMode()}`}>
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
    );
}

export default App;
