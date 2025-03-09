import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/consfig';

const Signin = () => {
    const [email, setEmail] = useState("radhe@gmail.com")
    const [password, setPassword] = useState("radhaRani@123")
    const [err, seterr] = useState("")
    const navigate = useNavigate()
    async function signInHendler() {
        try {
            const res = await axios.post(BASE_URL + "signIn", { email, password }, { withCredentials: true })
            alert("logIn successfull")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='flex flex-col items-center gap-5 justify-center h-screen'>

            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            </label>
            <button onClick={signInHendler} className="btn input  bg-primary btn-active btn-primary cursor-pointer ">Sign In</button>
            <h1 className='text-black'>New user?<Link to="/signup" className='text-primary font-bold text-xs ml-2'>Sign Up</Link></h1>
        </div>
    )
}


export default Signin
