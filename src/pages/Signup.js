import React, { useState } from 'react';
import signupImage from '../picture/login-animation.gif'
import {BiSolidShow, BiSolidHide} from 'react-icons/bi';



const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(perviews => !perviews);
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword( perviews => !perviews);
    }
    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                {/* <h1 className='text-center text-2xl fond-bold'>Sign Up</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                    <img src={signupImage} className='w-full ' />
                </div>
                <form className='w-full py-3 flex flex-col'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" placeholder='First Name' id='firstName' name='firstname' className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300 ' required/>
                   
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" placeholder='Last Name' id='LastName' name='LastName' className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' required/>
                  
                    <label htmlFor="Email">Email Address</label>
                    <input type="email" placeholder='Email Address' id='LastName' name='email' className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' required/>
                
                    <label htmlFor="password">Passored</label>
                    <div className='flex px-2 py-1 bg-slate-300 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                    <input type={showPassword ? 'text':"password"} placeholder='Password' id='LastName' name='password' className='mt-1 mb-2 w-full bg-slate-300 border-none outline-none' required/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ?<BiSolidHide/> : <BiSolidShow/>}</span>
                    </div>
                    <label htmlFor="Confirm Password">Passored</label>
                    <div className='flex px-2 py-1 bg-slate-300 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300'>
                    <input type={showConfirmPassword ? 'text':"password"} placeholder='confirmpassword' id='confirmpassword' name='confirmpassword' className='mt-1 mb-2 w-full bg-slate-300 border-none outline-none' required/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{ showPassword ?<BiSolidHide/> : <BiSolidShow/>}</span>

                    </div>
                    <button className='w-full max-w[150px] m-auto bg-orange-500 hover:bg-orange-700 cursor-pointer text-white text-xl font-medium text-center'>Sign Up</button>
               
                </form>
            </div>
        </div>
    );
};

export default Signup;