// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { GetAllEnrolledStudents } from '../services/getAllCourse';

// function DetailPage() {
//   // getallcoursesenrolledstudents
//   const params = useParams();
//   const [allStudentsData, setAllStudentsData] = useState([])
//   useEffect(() => {
//     (async () => {
//       const response = await GetAllEnrolledStudents(params.cn)
//       setAllStudentsData(response.data)
//     })()
//   }, [])
//   return (
//     <>
//       <div className="container border bg-white p-3 rounded-3">
//         <h2 className='text-capitalize '>detail page:</h2>
//         <div className="d-flex justify-content-between align-items-center">
//           <p className='text-capitalize fw-semibold'>Course:{ }</p>
//           <p className='text-capitalize fw-semibold'>total students:{ }</p>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="mt-3" style={{ height: '450px', overflow: "auto" }}>
//               <table className='table table-border'>
//                 <thead>
//                   <tr>
//                     <th>S.No</th>
//                     <th>Roll No</th>
//                     <th>Student Name</th>
//                     <th>Course</th>
//                     <th>Batch</th>
//                   </tr>
//                 </thead>
//               </table>
//               <tbody>

//                 {
//                   allStudentsData.map((data, index) => {
//                    return (
//                     <tr>
//                       <td>{index + 1}</td>
//                       <td>{data.rollno}</td>
//                       <td>{data.name}</td>
//                       <td>{data.course}</td>
//                       <td>{data.batchNo}</td>
//                     </tr>
//                    ) 
//                     // console.log(data)
//                     // batchNo,course,rollno

//                   })
//                 }
//               </tbody>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default DetailPage


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetAllEnrolledStudents } from '../services/getAllCourse';
import Loader from '../component/Loader/Loader';

function DetailPage() {
  const params = useParams();
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllEnrolledStudents(params.cn);
        setAllStudentsData(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params.cn]);

  // if (isLoading) {
  //   return <div className="container border bg-white p-3 rounded-3">Loading...</div>;
  // }

  if (error) {
    return <div className="container border bg-white p-3 rounded-3">{error}</div>;
  }

  return (
    <div className="container border bg-white p-3 rounded-3">
      <h2 className='text-capitalize'>Detail Page:</h2>
      <div className="d-flex justify-content-between align-items-center">
        <p className='text-capitalize fw-semibold'>Course: {params.cn}</p>
        <p className='text-capitalize fw-semibold'>Total Students: {allStudentsData.length}</p>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="mt-3" style={{ height: '450px', overflow: "auto" }}>
            {
              isLoading ? (<Loader />) : (
                <table className='table table-border'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Roll No</th>
                      <th>Student Name</th>
                      <th>Course</th>
                      <th>Batch</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      allStudentsData.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">No data found</td>
                        </tr>
                      ) : (
                        allStudentsData.map((data, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.rollno}</td>
                            <td>{data.name}</td>
                            <td>{data.course}</td>
                            <td>{data.batchNo}</td>
                          </tr>
                        ))
                      )}
                  </tbody>
                </table>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
