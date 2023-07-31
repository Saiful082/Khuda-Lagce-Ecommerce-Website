import React, { useState } from 'react';
import signupImage from '../picture/login-animation.gif'
import {BiSolidShow, BiSolidHide} from 'react-icons/bi';
import { Link } from 'react-router-dom';



const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword( perviews => !perviews);
    };

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
        const {firstname, email, password, confirmpassword} = data;
        if(firstname && email && password && confirmpassword){
            if(password === confirmpassword){
                alert('Successfull')
            }
            else{
                alert('Password and conform Password not mached')
            }
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
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" 
                    placeholder='First Name' 
                    id='firstName' 
                    name='firstname' 
                    className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300 ' 
                    value={data.firstname}
                    onChange={handleOnChange}
                    required/>
                   
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" 
                    placeholder='Last Name' 
                    id='LastName' 
                    name='lastname' 
                    className='mt-1 mb-2 w-full bg-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    value={data.lastname}
                    onChange={handleOnChange}
                    required/>
                  
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
                    <label htmlFor="Confirm Password">Passored</label>
                    <div className='flex px-2 py-1 bg-slate-300 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300'>
                    <input type={showConfirmPassword ? 'text':"password"}
                    placeholder='confirmpassword' 
                    id='confirmpassword' 
                    name='confirmpassword' 
                    className='mt-1 mb-2 w-full bg-slate-300 border-none outline-none' 
                    value={data.confirmpassword}
                    onChange={handleOnChange}
                    required/>
                    <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{ showPassword ?<BiSolidHide/> : <BiSolidShow/>}</span>

                    </div>
                    <button className='w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>

                    <p className='text-left text-sm mt-2'>Already have an Account ? <Link to='/login' className='text-orange-500 underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;