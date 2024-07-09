import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";
import '../index.css';
import { useGlobalState } from '../contextApi/ContextApi';

function Password() {
    const { setIsUserToken } = useGlobalState()
    const [getPassword, setGetPassword] = useState("")

    const navigate = useNavigate()

    let Continue = async () => {
        try {
            if (!getPassword) {
                alert("Invalid Credential")
            }
            const response = await axios.post('http://localhost:8003/login', {
                id: "668822b984d1ef6732e207bb",
                password: getPassword
            });
            if (response.data.status === 200) {
                localStorage.setItem("token", JSON.stringify(response.data.token))
                setIsUserToken(response.data.token)
                navigate("/home")
                window.location.reload()
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center main_divs'>
            <div className='form-div text-center '>
                <div className='mb-4'>
                    <img src={logo} />
                </div>

                <div className='form-floating mb-3'>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        style={{ boxShadow: "none", outline: "none" }}
                        onChange={(e) => { setGetPassword(e.target.value) }}
                    />
                    <label htmlFor="password">Enter our password</label>
                </div>

                <div className='d-grid mt-3'>
                    <button className='btn btn-primary' onClick={Continue} >Continue</button>
                </div>

            </div>
        </div>
    )
}

export default memo(Password);