import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { GetAllCertificateData } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';
import { useGlobalState } from '../contextApi/ContextApi';

function AllCertificates() {
    const { totalCertificaet, setTotalCertificate } = useGlobalState()
    const [certificateData, setCertificateData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAllCertificateData();
                setCertificateData(response.data);
                setTotalCertificate(response.data.length)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
//isEmail

    return (
        <div className="bg-white p-3 mb-3 rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
                <h2>All Certificates</h2>
                <p>Total Certificate:{totalCertificaet}</p>

            </div>
            <input type="text" className="form-control mt-4" placeholder="Enter Student Roll Number" style={{ boxShadow: "none", outline: "none" }} />
            <div className="" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                    <Loader />
                ) : certificateData.length > 0 ? (
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
                            {certificateData.map((certificate) => (
                                <tr key={certificate._id}>
                                    <td>{certificate.rollno}</td>
                                    <td>{certificate.course}</td>
                                    <td>{certificate.batchNo}</td>
                                    <td>
                                        <span className='bg-primary text-white py-1 px-2 rounded-3' style={{ fontSize: "13px" }}>
                                            {
                                                certificate.Active ? "Active" :"Unactive" 
                                            }
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
    );
}

export default AllCertificates;
