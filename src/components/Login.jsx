import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async () => {

        axios.post('some url', {
            email, password
        }).then(res => {
            alert("Login successfull!")
            navigate('/')
        }).catch(err => {
            alert("Something went wrong")
        })
    }
    const handleSubmitAdmin = async () => {

        axios.post('some url', {
            email, password
        }).then(res => {
            alert("Login successfull!")
            navigate('/dashboard')
        }).catch(err => {
            alert("Something went wrong")
        })
    }
    return (
        <div className='body'>
            <h1 className='h1'>Login</h1>
            <form className='form' >
                <div class="row1">
                    <label for="email">Email</label>
                    <input type="email" value={email} onChange={e => setemail(e.target.value)} name="email" placeholder="email@example.com" />
                </div>
                <div class="row1">
                    <label for="password">Password</label>
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} name="password" />
                </div>
                <button className='button btn1' type="button" onClick={handleSubmit}>Login</button>
                <button className='btn1 btn-danger' type="button" onClick={handleSubmitAdmin}>Login as admin</button>
            </form>
        </div>
    );
}

export default Login;