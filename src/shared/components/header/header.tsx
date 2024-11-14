import './header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { switchTheme } from '../../redux/theme-mode.slice';

function Header() {
    const themeMode = useSelector((state: any) => state.themeMode.value);
    const dispatch = useDispatch();

    return (
        <header>
            <section>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">Formik</NavLink>
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
