import React from 'react';
import logo from "../assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import OffcanvasButton from './Offcanvas/Offcanvas';
import { useGlobalState } from '../contextApi/ContextApi';

export default function Navbar() {
    const  {otpVerificationEmail}=useGlobalState()

    return (
        <>
            <nav className="d-flex justify-content-between py-2 px-5 bg-white position-sticky sticky-top border-bottom">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <OffcanvasButton/>
                    </div>
                    <a href='/'><img src={logo} alt="Saylani Welfare Logo" className='img-fluid ms-3' width="100" /></a>
                </div>
                <div className="d-flex align-items-center profile">
                    <span className="me-2">dummy@gmail.com</span>
                </div>
            </nav>
        </>

    )
}