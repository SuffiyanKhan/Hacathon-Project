import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IssuedCertificateForm from '../component/IssuedCertificateForm/IssuedCertificateForm';
import { useGlobalState } from '../contextApi/ContextApi';
import axios from 'axios';
function IssuedCertificatemodal() {
    const { setError, issuedBatchNo, setIssuedBatchNo, issuedCourseName, setIssuedCourseName } = useGlobalState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ISSUEDcERTIFICATE = async () => {
        if (!issuedBatchNo | !issuedCourseName) {
            setError("Please fill inputs")
            return;
        }
        handleClose();
        setError("");
        setIssuedBatchNo("");
        setIssuedCourseName("");
        try {
            const response = await axios.post('http://localhost:8003/generate', {
                batchno: issuedBatchNo.toLowerCase(),
                course: issuedCourseName.toLowerCase()
            });
            const successStatus = await response.status

            if (successStatus.status === 200) {
                alert("Certificates generated successfully");
                handleClose();
                setError("");
                setIssuedBatchNo("");
                setIssuedCourseName("");
            } else {
                alert("Failed to generate certificates. Status: " + successStatus.status);
            }

        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Certificates not found on server. Please check your inputs.");
                } else {
                    alert("Internal Server Error. Failed to issue certificates.");
                }
            } else if (error.request) {
                alert("Network error. Failed to communicate with server.");
            } else {
                alert("Error issuing certificate: " + error.message);
            }
        }
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Isuued certificate
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Isuued certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IssuedCertificateForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ISSUEDcERTIFICATE}>
                        Issued
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default IssuedCertificatemodal