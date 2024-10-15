import { Link } from 'react-router-dom';
import background from '../assets/background.svg';
import logo from '../assets/gamelab.png';

export default function Register() {
    return (
        <div className='fixed inset-0 bg-dark bg-opacity-50 w-full flex justify-center items-center'>
            <div className='relative flex justify-center items-center w-[700px] h-auto'>

                {/* Background image */}
                <img src={background} alt="background" className='w-full h-full mx-auto object-cover rounded'/>

                {/*  */}
                <div className='absolute inset-0 flex flex-col justify-start items-start p-4 gap-8'>
                    <div className='flex items-center gap-28'>
                        <img src={logo} alt="gamelab" className='w-[100px]' />
                        <ul className='inline-flex text-gray-500 gap-8 text-xs'>
                            <li>
                                <Link to='/login' className='hover:text-white'>LOGIN</Link>
                            </li>
                            <li>
                                <Link to='/register' className='hover:text-white'>REGISTER</Link>
                            </li>
                        </ul>
                    </div>

                    <form action="#" className='mt-4'>
                        <h1 className='text-white'>Create new account.</h1>
                        <div className='flex gap-4 my-2'>
                            <div className='flex flex-col'>
                                <label htmlFor="firstName" className='text-white text-xs my-2'>
                                    FIRST NAME
                                </label>
                                <input type="text" id='firstName' className='rounded bg-grey 
                                w-[10rem] outline-none border-none p-1 text-sm text-white 
                                focus:outline-secondary focus:outline-1 focus:border-0'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="lastName" className='text-white text-xs my-2'>
                                    LAST NAME
                                </label>
                                <input type="text" id='lastName' className='rounded bg-grey
                                w-[10rem] outline-none border-none p-1 text-sm text-white 
                                focus:outline-secondary focus:outline-1 focus:border-0'/>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white text-xs my-2'>
                                EMAIL
                            </label>
                            <input type="text" id='email' className='rounded bg-grey
                            w-[21rem] outline-none border-none p-1 text-sm text-white 
                            focus:outline-secondary focus:outline-1 focus:border-0 focus:bg-grey'/>

                            <label htmlFor="email" className='text-white text-xs my-2'>
                                PASSWORD
                            </label>
                            <input type="text" id='password' className='rounded bg-grey
                            w-[21rem] outline-none border-none p-1 text-sm text-white 
                            focus:outline-secondary focus:outline-1 focus:border-0'/>

                            <label htmlFor="email" className='text-white text-xs my-2'>
                                CONFIRM PASSWORD
                            </label>
                            <input type="text" id='confirmPassword' className='rounded bg-grey 
                            w-[21rem] outline-none border-none p-1 text-sm text-white 
                            focus:outline-secondary focus:outline-1 focus:border-0 focus:bg-grey'/>
                            <button type='button' className='bg-primary rounded font-bold
                            p-1 mt-6 text-sm hover:bg-primary-light'>
                                REGISTER
                            </button>
                            <p className='text-xs text-gray-300 font-light mt-2'>
                            By signing up, you agree to our
                                <a href="" className='underline'> Terms</a> and
                                <a href="" className='underline'> Privacy</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
