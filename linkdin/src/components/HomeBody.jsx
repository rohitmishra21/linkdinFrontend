import React from 'react'
import { Link } from 'react-router-dom'

const HomeBody = () => {
    return (
        <div>
            <div className='w-full flex '>
                <div className='w-1/2 flex flex-col items-center justify-center gap-8 mt-12'>
                    <h1 className='text-5xl text-center'> Welcome to your <br /> professional community</h1>
                    <Link to="/signin" className="btn bg-white w-52  text-black border-black rounded-full ">
                        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Sign in with Email
                    </Link>
                    <h1 className='text-xs'>By clicking Continue to join or sign in, you agree to LinkedIn’s User <br /> Agreement, Privacy Policy, and Cookie Policy.</h1>

                    <h1> New to LinkedIn? <Link to="/signup" className='text-primary'>Join now</Link></h1>
                </div>
                <div className='w-1/2 mt-11 '>
                    <img className='h-full' src="https://business.brainiark360.com/assets/images/auth/registration%20hero%20img.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBody
