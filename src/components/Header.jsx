import logo from '../assets/gamelab.png';
import burgerMenu from '../assets/burger-menu.svg'
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

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="relative md:w-full h-50 bg-dark ">
            <header className=" mx-2 md:mx-4 flex justify-between items-center h-full">
                <img src={logo} alt="logo" className='h-auto md:w-[200px] w-[130px]' />
                <div className="flex">
                    <button 
                        onClick={activeButton} 
                        className={`hidden md:block md:py-1.5 md:px-4 rounded font-semibold md:text-sm ${active === 'login' ? 
                        'bg-gradient-primary text-dark font-extrabold' : 'bg-transparent text-white border border-none'}
                        transition duration-300`}
                        aria-pressed={active === 'login'}>
                        LOGIN
                    </button>
                    <button 
                        onClick={activeButton} 
                        className={`hidden md:block md:py-1.5 md:px-4 rounded font-semibold md:text-sm ${active === 'signup' ? 
                        'bg-gradient-primary text-dark font-bold' : 'bg-transparent text-white border border-none'}
                        transition duration-300`}
                        aria-pressed={active === 'signup'}>
                        SIGN IN
                    </button>
                    <img src={burgerMenu} alt="menu"
                    className='md:hidden w-6 ml-2'/>
                </div>
            </header>
        </div>
    );
}
