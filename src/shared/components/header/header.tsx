import { getThemeMode, setThemeMode } from '../../utils/storage.service';

function Header() {
    const switchThemeMode = () => {
        const newMode = getThemeMode() === 'dark' ? '' : 'dark';
        setThemeMode(newMode);
        window.location.reload();
    };

    return (
        <main>
            <section></section>

            <section>
                <button onClick={switchThemeMode}>Mode</button>
            </section>
        </main>
    );
}

export default Header;
