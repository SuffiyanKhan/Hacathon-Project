import axios from 'axios'
import React, { memo } from 'react'

function SendEmail() {
    const sendEmail=async()=>{
        
        alert("Sending Emails....")
        try {
           const response = await axios.post("http://localhost:8003/send-Email")
           const successStatus= await response.status
            
           if (successStatus === 200) {
               alert("Sending Email is Done!") 
           }
        } catch (error) {
            console.error("ERROR",error.message)
        }
    }
    return (
        <>
            <button className="btn btn-primary" onClick={sendEmail}>Send Email</button>
        </>
    )
}

export default memo(SendEmail)