import logo from '../assets/gamelab.png';
import { useState } from 'react';

export default function Header() {
    const [active, setActive] = useState('signup');

    const activeButton = () => {
        if (active === 'signup') {
            setActive('login');
        } else {
            setActive('signup');
        }
    }

    return (
        <div className="relative w-full h-50 bg-dark ">
            <header className=" mx-4 flex justify-between items-center h-full">
                <img src={logo} alt="logo" className='w-[200px] h-auto' />
                <div className="flex">
                    <button 
                        onClick={activeButton} 
                        className={`py-1.5 px-5 rounded font-semibold text-sm ${active === 'login' ? 
                        'bg-gradient-primary text-dark' : 'bg-transparent text-white border border-none'}
                        transition duration-300`}
                        aria-pressed={active === 'login'}
                    >
                        LOGIN
                    </button>
                    <button 
                        onClick={activeButton} 
                        className={`py-1.5 px-5 rounded font-semibold text-sm ${active === 'signup' ? 
                        'bg-gradient-primary text-dark' : 'bg-transparent text-white border border-none'}
                        transition duration-300`}
                        aria-pressed={active === 'signup'}
                    >
                        SIGN IN
                    </button>
                </div>
            </header>
        </div>
    );
}
