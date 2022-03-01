import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
const SignUp = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [phone, setphone] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            alert("password and confirm password dosent match")
        } else {
            axios.post('some url', {
                email, password
            }).then(res => {
                alert("Account created successfull!")
                navigate('/')
            }).catch(err => {
                alert(err.code, ":Something went wrong")
            })
        }
    }
    return (
        <div className='body'>
            <h1 className='h1'>Signup</h1>
            <form className='form form1' onSubmit={e => handleSubmit(e)}>
                <div class="row1">
                    <label for="email">Email</label>
                    <input type="email" value={email} onChange={e => setemail(e.target.value)} name="email" autocomplete="off" placeholder="email@example.com" />
                </div>
                <div class="row1">
                    <label for="password">Password</label>
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} name="password" />
                </div>
                <div class="row1">
                    <label for="password">Confirm Password</label>
                    <input type="password" value={cpassword} onChange={e => setcpassword(e.target.value)} name="password" />
                </div>
                <div class="row1">
                    <label for="phone">Phone no</label>
                    <input type="tel" value={phone} onChange={e => setphone(e.target.value)} name="email" autocomplete="off" placeholder="9876543210" />
                </div>
                <button className='button' type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignUp;