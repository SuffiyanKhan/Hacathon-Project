import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";

function ChangeEmail() {
    const [getOldEmail, setOldGetEmail] = useState("")
    const [getNewEmail, setNewGetEmail] = useState("")
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const navigate = useNavigate()
    let Done = async () => {
        try {
            if (!validateEmail.test(getOldEmail) || !validateEmail.test(getNewEmail)) {
                return alert("something went wrong")
            }
            const response = await axios.post('http://localhost:8003/updateemail', {
                email: getOldEmail,
                newEmail: getNewEmail
            });
            if (response.data.status === 200) {
                alert("Successfully")
                navigate('/home')
            }
        } catch (error) {
            if (error.status === 400) {
                alert("Invalid Credential")
            }
            alert("Invalid Credential")
            console.error(error.message)
        }
    }
    return (
        <>
            <div className="container">
                <div className='row d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
                    <div className='col-lg-6 col-md-6 col-sm-12  '>
                        <div className='mb-4 d-flex justify-content-center align-items-center'>
                            <img src={logo} width={160} />
                        </div>

                        <div className='form-floating mb-3'>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{ boxShadow: "none", outline: "none" }}
                                onChange={(e) => { setOldGetEmail(e.target.value) }}
                            />
                            <label htmlFor="email">Enter Email</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{ boxShadow: "none", outline: "none" }}
                                onChange={(e) => { setNewGetEmail(e.target.value) }}
                            />
                            <label htmlFor="email">Enter New Email</label>
                        </div>

                        <div className='d-grid mt-3'>
                            <button className='btn btn-primary w-100' onClick={Done}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeEmail;