import React from 'react';
import signupImage from '../picture/login-animation.gif'

const Signup = () => {
    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                {/* <h1 className='text-center text-2xl fond-bold'>Sign Up</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                    <img src={signupImage} className='w-full ' />
                </div>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"  id='firstName' name='firstname' className='w-full bg-slate-300 px-2 py-2'/>
                </form>
            </div>
        </div>
    );
};

export default Signup;