import React from 'react'
import IssuedCertificateForm from './IssuedCertificatemodal'

export default function IssuedCertForm() {
    return (
        <div className="bg-white p-3 mb-3 rounded shadow-sm">
            <div className="d-flex justify-content-between">
                <h2>Issued Certificates</h2>
                <div className="">
                    <IssuedCertificateForm />
                    <button className="btn btn-primary">Send Certificate by Email</button>
                </div>
            </div>
            <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} />
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Certificate ID</th>
                        <th>Course Name</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Web/App Development</td>
                        <td>2024-01-01</td>
                        <td> <span className='bg-primary text-white py-1 px-2 rounded-3 ' style={{ fontSize: "13px" }}>Active</span> </td>
                        <td>
                            <button className="btn btn-success btn-sm m-1">View</button>
                            <button className="btn btn-danger btn-sm m-1">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>AI / ChstBoot</td>
                        <td>2024-01-02</td>
                        <td> <span className='bg-primary text-white py-1 px-2 rounded-3 ' style={{ fontSize: "13px" }}>Active</span> </td>
                        <td>
                            <button className="btn btn-success btn-sm m-1">View</button>
                            <button className="btn btn-danger btn-sm m-1">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    // return (
    //     <div className="bg-white p-3 mb-3 rounded shadow-sm create_cert">
    //         <h2>Issued Certificate:</h2>
    //         <div className="mt-4">
    //             <div className="mb-3">
    //                 <label htmlFor="recipient-name" className="form-label">Batch Number:</label>
    //                 <div className='form-floating mb-3'>
    //                     <input
    //                         type="text"
    //                         className="form-control"
    //                         id='recipient-name'
    //                         placeholder="Enter your name"
    //                         style={{ boxShadow: "none", outline: "none" }}
    //                     />
    //                     <label htmlFor="email">Enter your batch no.</label>
    //                 </div>
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="recipient-email" className="form-label">Course Name:</label>
    //                 <div className='form-floating mb-3'>
    //                     <input
    //                         type="text"
    //                         className="form-control"
    //                         id='recipient-email'
    //                         placeholder="Enter your course name"
    //                         style={{ boxShadow: "none", outline: "none" }}
    //                     />
    //                     <label htmlFor="email">Enter your course name</label>
    //                 </div>
    //             </div>
    //         </div>

    //         <a href='/adminportal/issuedcertificates'>
    //             <button type="submit" className="btn btn-primary">Issued </button>
    //         </a>
    //     </div>
    // )
}
