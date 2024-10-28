import React from 'react'

function FCTablesStudentHeading() {
  return (
    <div>
         <table className="tableWidth">
          <caption>SECONDARY EDUCATION STUDENTS MARKS LIST</caption>
          <tr>
            <th rowSpan={2} className='rollNO'>Roll No.</th>
            <th rowSpan={2} className='studentName'>Student Name</th>
            <th rowSpan={2} className='maxMarks'>Max. Marks(for Each Subject)</th>
            <th colSpan={6} className='studentsMarks'>Marks Obtained</th>
            <th rowspan={2} className='studentTotal'>Total</th>
            <th rowspan={2} className='studentResult'>Result</th>
            <th rowSpan={2} className='studentRemarks'>Remarks</th>
          </tr>
          <tr>
            <th className='studentsMarks'>Telugu</th>
            <th className='studentsMarks'>Hindi</th>
            <th className='studentsMarks'>English</th>
            <th className='studentsMarks'>Maths</th>
            <th className='studentsMarks'>Science</th>
            <th className='studentsMarks'>Social</th>
            
          </tr> 
        </table>      
      
    </div>
  )
}

export default FCTablesStudentHeading
