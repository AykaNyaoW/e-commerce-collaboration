import '../styles/header.css';
import logo from '../assets/gamelab.png';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState('signup');

    const activeButton = () => {
        if (active === 'signup') {
            setActive('login');
        } else {
            setActive('signup');
        }
    }

    return (
        <div className="header-container">
            <header className="header">
                <img src={logo} alt="logo" className='logo'/>
                <div className="buttons-container">
                    <button onClick={activeButton} className={active === 'login' ? 'active' : ''}>
                    LOGIN</button>
                    <button onClick={activeButton} className={active === 'signup' ? 'active' : ''}>
                    SIGN IN</button>
                </div>
            </header>
        </div>
    );
}

export default Header