import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.png";
// import '../index.css';
import { useGlobalState } from '../contextApi/ContextApi';

function Password() {
    const { setIsUserToken } = useGlobalState()
    const [getPassword, setGetPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    let Continue = async () => {
        try {
            if (!getPassword) {
                alert("Invalid Credential")
            }
            setLoading(true)
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
            setError("Incorrect Password")
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-lg-5 col-md-6 col-sm-12 py-5">
                        <div className='mb-4 d-flex justify-content-center mb-5 pb-2'>
                            <img src={logo} width={160} />
                        </div>
                        <p>{error}</p>
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
                            <button className='btn btn-primary' onClick={Continue} >
                                {loading ? 'Loading...' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Password);