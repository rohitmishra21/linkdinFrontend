import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/consfig';
import Error from './Error';
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice';

const Signin = () => {
    const [email, setEmail] = useState("rohit@gmail.com")
    const [password, setPassword] = useState("rohitMishra@123")
    const [err, seterr] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function signInHendler() {
        try {
            const res = await axios.post(BASE_URL + "signIn", { email, password }, { withCredentials: true })
            dispatch(setUser(res.data))
            navigate("/body")
        } catch (err) {
            seterr(err?.response?.data?.message || "someThing went wrong");
            console.log(err);
        }
    }
    return (
        <div className='flex  items-center justify-center h-screen'>
            <div className=' flex flex-col gap-6 px-10 shadow shadow-black/30 py-6'>
                <h1 className='text-3xl font-medium'>Sign in</h1>
                <label className="input validator h-16 border-black text-xl ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>

                <label className="input validator h-16 border-black text-xl ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </label>
                <Error msg={err} />
                <button onClick={signInHendler} className="btn input rounded-full  bg-primary btn-active btn-primary cursor-pointer ">Sign In</button>
                <h1 className='text-black text-center'>New to LinkedIn?<Link to="/signup" className='text-primary font-bold text-xs ml-2'>Join now</Link></h1>

            </div>
        </div>
    )
}


export default Signin
