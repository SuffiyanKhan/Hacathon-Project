export const GetAllCourse=async()=>{
    try {
        const response = await fetch('http://localhost:8003/get-allCourses')
            const data = await response.json();
        return data
    } catch (error) {
        throw error.message
    }
}
export const GetAllSTudents=async()=>{
    try {
        const response = await fetch("http://localhost:8003/getAllStudents")
        const studentData = response.json();
        return studentData
    } catch (error) {
        throw error
    }
}
export const GetAllCertificateData=async()=>{
    try {
        const response = await fetch("http://localhost:8003/getAllCertificates");
        const data = await response.json();
        return data
    } catch (error) {
        throw error.message
    }
}