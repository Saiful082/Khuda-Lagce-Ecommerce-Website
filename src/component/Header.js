import React, { useState } from 'react';
import logo from '../picture/logo.png'
import { Link } from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi'
import {BsFillCartFill} from 'react-icons/bs'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* Desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={''}>
                <div className='h-10'>
                    <img src={logo} className='h-full'/>
                </div>
                </Link>
                <div className='flex items-center gap-4 md:gap-7text-2xl text-slate-500'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={''}>Home</Link>
                        <Link to={'menu'}>Menu</Link>
                        <Link to={'about'}>About</Link>
                        <Link to={'contact'}>Contact</Link>
                    </nav>
                </div>

                <div className='text-2xl text-slate-600 relative'>
                 <BsFillCartFill/>
                 <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 m-0 p-0 rounded-full text-sm  text-center'>0</div>
                </div>

                <div className=' text-slate-600 ' onClick={handleShowMenu}>
                    <div className='text-3xl cursor-pointer'>
                    <BiUserCircle/>
                     </div>
                     {
                        showMenu && (
                            <div className='absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col'>
                            <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer'>New Poduct</Link>
                            <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>                       
                            </div>
                        )
                     }
                    
                </div>

            </div>

            {/* Mobile */}
        </header>
    );
};

export default Header;