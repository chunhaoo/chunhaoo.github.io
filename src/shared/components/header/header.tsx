import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../redux/theme-mode.slice';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    const themeMode = useSelector((state: any) => state.themeMode.value);
    const dispatch = useDispatch();

    return (
        <header>
            <section>
                <Link to={`home`}>Chun Hao</Link>
            </section>

            <section>
                <button className={`${themeMode} mode`} onClick={() => dispatch(switchTheme())}>
                    <div className={`icon icon-${themeMode}-mode`} />
                </button>
            </section>
        </header>
    );
}

export default Header;
