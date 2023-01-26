import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const registerHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Password do not match.')
        } else {
            const user = { name, email, password, confirmPassword }
            dispatch(registerUser(user))
        }
    }

    return (
        <>
            <div class="container mt-5 pt-5">
                <div className="LoginSignUpContainer">
                    <div className="LoginSignUpBox">

                        <form className="loginForm" >
                            <div className="loginEmail">

                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="loginEmail">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    onChange={e => setEmail(e.target.value)}

                                />
                            </div>

                            <div className="loginPassword">

                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="loginPassword">

                                <input
                                    type="password"
                                    placeholder=" Confirm Password"
                                    required
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <input type="submit" value="Login" className="loginBtn" onClick={registerHandler} />


                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register;