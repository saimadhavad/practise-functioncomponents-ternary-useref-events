import React, { useRef } from 'react'

function UseRefOnClickArrowFunction() {

    let firstNameInputRef =useRef();
    let lastNameInputRef =useRef();

    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();

    let labelResultRef = useRef();

  return (
    <div className="useRefOnClickArrowFunctions">
      <form>
      <div><h3>Student Personal & Mark Details :</h3></div>
       <fieldset>
       
        <legend>Personal Details</legend>
       <div>
            <label>First name</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last name</label>
            <input ref={lastNameInputRef}></input>
        </div>
       </fieldset>
        <fieldset>
            <legend>Mark Details</legend>
        <div>
            <label>Telugu</label>
            <input type='number' ref={teluguMarksInputRef}></input>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hindiMarksInputRef}></input>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={englishMarksInputRef}></input>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={mathsMarksInputRef}></input>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={scienceMarksInputRef}></input>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={socialMarksInputRef}></input>
        </div>
        </fieldset>
        <div>
            <button type="button"
                    onClick={ () => {

                        let firstName =  firstNameInputRef.current.value;
                        let lastName =lastNameInputRef.current.value;

                        let teluguMarks = Number(teluguMarksInputRef.current.value);
                        let hindiMarks = Number(hindiMarksInputRef.current.value);
                        let englishMarks = Number(englishMarksInputRef.current.value);
                        let mathsMarks = Number(mathsMarksInputRef.current.value);
                        let scienceMarks = Number(scienceMarksInputRef.current.value);
                        let socialMarks = Number(socialMarksInputRef.current.value);

                        let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

                        alert(`${firstName} ${lastName} Total Marks are ${totalMarks}`);
                        labelResultRef.current.innerHTML = `${firstName} ${lastName} Total Marks are ${totalMarks}`;

                        
                    }}
            >Calculate Result</button>
        </div>
        <label className='innerLabel' ref={labelResultRef}></label>
      </form>
    </div>
  )
}

export default UseRefOnClickArrowFunction
