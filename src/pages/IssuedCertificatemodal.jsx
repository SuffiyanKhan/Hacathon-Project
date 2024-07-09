import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IssuedCertificateForm from '../component/IssuedCertificateForm/IssuedCertificateForm';
import { useGlobalState } from '../contextApi/ContextApi';
import axios from 'axios';
function IssuedCertificatemodal() {
    const { error, setError, issuedBatchNo, setIssuedBatchNo, issuedCourseName, setIssuedCourseName } = useGlobalState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ISSUEDcERTIFICATE =async () => {
        if (!issuedBatchNo | !issuedCourseName) {
            setError("Please fill inputs")
            return;
        }
        try {
            const response = await axios.post('http://localhost:8003/generate', {
                batchno: issuedBatchNo.toLowerCase(),
                course: issuedCourseName.toLowerCase()
            });

            alert("Start Certificate Generated") 
            handleClose();
            setError("");
            setIssuedBatchNo("");
            setIssuedCourseName("");
            if (response.status === 200) {
                alert("ALL Certificate Generated") 
            }
        } catch (error) {
            console.error('Error issuing certificate:', error);
            setError("Failed to issue certificate");
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