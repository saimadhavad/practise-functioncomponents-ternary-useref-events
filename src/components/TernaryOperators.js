import React from 'react'

function TernaryOperators(props) {
    let teluguMarks = Number(props.teluguMarks);
    let hindiMarks = Number(props.hindiMarks);
    let englishMarks = Number(props.englishMarks);
    let mathsMarks = Number(props.mathsMarks);
    let scienceMarks = Number(props.scienceMarks);
    let socialMarks = Number(props.socialMarks);

    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
    let percentage = (totalMarks/600)*100;

  return (
<div>
      <table className="ternaryTable">
        <caption>{props.name}'s MARKSHEET</caption>
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
                <td rowSpan={6}>100</td>
                <td>{teluguMarks}</td>
                <td>{teluguMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <th>Hindi</th>
                {/* <td>100</td> */}
                <td>{hindiMarks}</td>
                <td>{hindiMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <th>English</th>
                {/* <td>100</td> */}
                <td>{englishMarks}</td>
                <td>{englishMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <th>maths</th>
                 {/*<td>100</td> */}
                <td>{mathsMarks}</td>
                <td>{mathsMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <th>Science</th>
                {/* <td>100</td> */}
                <td>{scienceMarks}</td>
                <td>{scienceMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
            <tr>
                <th>Social</th>
                {/* <td>100</td> */}
                <td>{socialMarks}</td>
                <td>{socialMarks>=35?"Pass":"Fail"}</td>
                <td>Good</td>
            </tr>
        </tbody>
        <tfoot>
        <tr>
                <th>TOTAL</th>
                <th>600</th>
                <th>{totalMarks}({percentage.toFixed(2)}%)</th>
                <th>{props.result}</th>
                <th>{props.remarks}</th>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default TernaryOperators
