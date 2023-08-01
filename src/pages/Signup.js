import React, { useState } from 'react';
import signupImage from '../picture/login-animation.gif'
import {BiSolidShow, BiSolidHide} from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';


const Signup = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        image : '',

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

    const handleUplodeProfile = async(e) => {
        console.log();  
        const data =await ImagetoBase64(e.target.files[0]) 
        console.log(data);
        
        setData((preve) => {
            return{
                ...preve,
                image: data
            }
        })
    }
    console.log(process.env.REACT_APP_SERVER_DOMIN);
    const handleSubmit = async(e) => {
        e.preventDefault()
        const {firstname, email, password, confirmpassword} = data;
        if(firstname && email && password && confirmpassword){
            if(password === confirmpassword){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/singup`, {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                console.log(dataRes);

                alert('Successfull')
                // navigate('/login')
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
                <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                    <img src={data.image? data.image : signupImage} className='w-full h-full' />

                    <label htmlFor="ProfileImage">
                    <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                        <p className='text-sm p-1 text-white'>Uplode</p>
                    </div>
                    <input type={'file'} id='ProfileImage' accept='image/*' className='hidden' onChange={handleUplodeProfile}/>
                    </label>
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