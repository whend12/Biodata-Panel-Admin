import React from 'react'

const Register = () => {
    return (
        <section className='min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12'>
            <div className='relative py-3 font-poppins sm:max-w-xl sm:mx-auto text-center'>
                <span className='text-2xl font-light'>
                    Login Admin
                </span>
                <div className='mt-4 bg-white shadow-md rounded-lg text-left'>
                    <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                    <div className='px-8 py-2 pb-2'>
                        {/* Identitas */}
                        <label className='block font-semibold '> Name </label>
                        <input type='text' className='border w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Your Name' />
                    </div>
                    <div className='px-8 py-2'>
                        <label className='block font-semibold '> Email </label>
                        <input type='email' className='border peer w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Email' />
                        <p className="mt-2 mb-1 invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>
                    </div>
                    <div className='px-8 -my-2'>
                        <label className='block font-semibold '> Gender </label>
                        <input id="male" className="peer/male mr-2" type="radio" name="status" />
                        <label for="male" className="peer-checked/male:text-sky-500 mr-3">Male</label>

                        <input id="female" className="peer/female mr-2" type="radio" name="status" />
                        <label for="female" className="peer-checked/female:text-sky-500">Female</label>
                    </div>
                    <div className='px-8 py-6'>
                        <label className='block mt-3 font-semibold '> Password </label>
                        <input type='Password' className='border w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Password' />
                        <label className='block mt-3 font-semibold '> Confirm Password </label>
                        <input type='Password' className='border w-full h-5 px-3 py-5 mt-2 rounded-lg hover:outline-none focus:outline-none focus:ring-1 focus:ring-border-indigo-600' placeholder='Confirm Password' />
                    </div>
                    <div className='px-8 pb-3 flex justify-between items-baseline'>
                        <button type='button' className='mt-4 bg-indigo-500 hover:bg-indigo-600  text-white py-2 px-6 rounded-lg mr-1 '> Create Account </button>
                        <a href='#' className='text-sm text-light hover:underline hover:text-indigo-400 mr-2'> Have a Account? Login </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Register;