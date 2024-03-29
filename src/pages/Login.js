import React, { useState } from 'react';
import signupImage from '../picture/login-animation.gif'
import {BiSolidShow, BiSolidHide} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',

    })
    console.log(data);
    const handleShowPassword = () => {
        setShowPassword(perviews => !perviews);
    }
    

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((perve) => {
            return{
                ...perve,
                [name] : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password, } = data;
        if(email && password ){  
                alert('Successfull')
            }
            
        }
           
        

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto  flex-col p-4'>
                {/* <h1 className='text-center text-2xl fond-bold'>Sign Up</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={signupImage} className='w-full ' />
                </div>
                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                  
                    <label htmlFor="Email">Email Address</label>
                    <input type="email" placeholder='Email Address' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
                    value={data.email}
                    onChange={handleOnChange}
                    required/>
                
                    <label htmlFor="Password">Password</label>
                    <div className='flex px-2 py-1 bg-slate-300 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                    <input type={showPassword ? 'text':"password"} placeholder='Password' id='password' name='password' className='mt-1 mb-2 w-full bg-slate-300 border-none outline-none' 
                    value={data.password}
                    onChange={handleOnChange}
                    required/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ?<BiSolidHide/> : <BiSolidShow/>}</span>
                    </div>
                    <button className='w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login </button>

                    <p className='text-left text-sm mt-2'>Don't have an Account ? <Link to='/signup' className='text-orange-500 underline'>Signup</Link></p>
                </form>
            </div>
        </div>
    );

};

export default Login;