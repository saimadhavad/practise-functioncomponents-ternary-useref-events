import React from 'react'

function FCTableStudentData(props) {
  return (
    <div>
      <table className='tableWidth2'>
        <caption>{props.name}'s Mark List</caption>
       <thead>
       <tr>
            <th>Subject</th>
            <th>Max. Marks</th>
            <th>Marks Obtained</th>
            <th>Result</th>
            <th>Remarks</th>
        </tr>
       </thead>
        <tbody>
        <tr>
            <th>Telugu</th>
            <td>100</td>
            <td>{props.telugu}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        <tr>
            <th>Hindi</th>
            <td>100</td>
            <td>{props.hindi}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        <tr>
            <th>English</th>
            <td>100</td>
            <td>{props.english}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        <tr>
            <th>Maths</th>
            <td>100</td>
            <td>{props.maths}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        <tr>
            <th>Science</th>
            <td>100</td>
            <td>{props.science}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        <tr>
            <th>Social</th>
            <td>100</td>
            <td>{props.social}</td>
            <td>{props.result}</td>
            <td>{props.remarks}</td>
        </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>600</th>
                <th>{props.total}</th>
                <th>{props.result}</th>
                <th>{props.overall}</th>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default FCTableStudentData
