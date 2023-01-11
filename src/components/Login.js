import React from 'react'
import Register from './Register';

const Login = () => {
    return (
        <section className='min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12'>
            <div className='relative py-3 font-poppins sm:max-w-xl sm:mx-auto text-center'>
                <span className='text-2xl font-light'>
                    Login Admin
                </span>
                <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                    <div className='px-8 py-6'>
                        <label className='block font-semibold '> Email </label>
                        <input type='email' className='border w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Email' />
                        
                        <label className='block mt-3 font-semibold '> Password </label>
                        <input type='Password' className='border w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Password' />
                    </div>
                    <div className='px-8 pb-3 flex justify-between items-baseline'>
                        <button type='button' className='mt-4 bg-indigo-500 hover:bg-indigo-600  text-white py-2 px-6 rounded-lg '> Login </button>
                        <a href={Register} className='text-sm text-light hover:underline hover:text-indigo-400'> Create Account </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login;