import React, { useEffect, useState } from 'react'
import IssuedCertificateForm from './IssuedCertificatemodal'
import { GetAllIssuedCertificate } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import SendEmail from '../component/SendEmail/SendEmail';

export default function IssuedCertForm() {
    const [allStudentData, setAllStudentData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAllIssuedCertificate();
                setAllStudentData(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return (
        <div className="bg-white py-5 px-4 mb-3 rounded shadow-sm">
            <div className="d-flex justify-content-between">
                <h2>Issued Certificates</h2>
                <div className="">
                    <IssuedCertificateForm />
                    <SendEmail/>
                </div>
            </div>
            {/* <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} /> */}
            <div className="mt-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                    <Loader />
                ) : allStudentData.length > 0 ? (
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Course Name</th>
                                <th>Batch No</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allStudentData.map((certificate) => (
                                <tr key={certificate._id}>
                                    <td>{certificate.rollno}</td>
                                    <td>{certificate.course}</td>
                                    <td>{certificate.batchNo}</td>
                                    <td>
                                        <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>
                                            complete
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-success btn-sm m-1">View</button>
                                        <button className="btn btn-danger btn-sm m-1" onClick={() => { alert(certificate._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}
            </div>
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
