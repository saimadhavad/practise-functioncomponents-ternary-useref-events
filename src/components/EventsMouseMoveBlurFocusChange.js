import React, { useEffect, useRef } from 'react'

function EventsMouseMoveBlurFocusChange() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();

    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();

    let resultParagraphRef = useRef();
    let firstNameResultSpanRef = useRef();
    let lastNameResultSpanRef = useRef();
    let teluguResultSpanRef = useRef();
    let hindiResultSpanRef = useRef();
    let englishResultSpanRef = useRef();
    let mathsResultSpanRef = useRef();
    let scienceResultSpanRef = useRef();
    let socialResultSpanRef = useRef();

    useEffect( () =>{
        console.log("Student Personal & Marks Details are Loaded");

    },[]);

  return (
    <div className="mouseMoveBlurFocusChange">
        <div><h3>Student - Personal & Marks Details </h3></div>
      <form>
        <fieldset>
            <legend>Personal Details</legend>
        <div>
            <label>First name</label>
            <input ref={firstNameInputRef}

                onFocus={ () => {
                    console.log("firstName on Focus");
                    firstNameInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange={ () => {
                    console.log("firstName on Change");
                }}
                onBlur={ () => {
                    console.log("firstName on Blur ");
                    firstNameInputRef.current.style.backgroundColor ="";
                }}
            ></input>
            <span ref={firstNameResultSpanRef}></span>
        </div>
        <div>
            <label>Last name</label>
            <input ref={lastNameInputRef}

                onFocus={ () => {
                    console.log("lastName on Focus");
                    lastNameInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange={ () => {
                    console.log("lastName on Change");
                }}
                onBlur={ () => {
                    console.log("lastName on Blur");
                    lastNameInputRef.current.style.backgroundColor ="";
                }}
            ></input>
            <span ref={lastNameResultSpanRef}></span>
        </div>
        </fieldset>
        <fieldset>
            <legend>Marks Details</legend>
        <div>
            <label>Telugu</label>
            <input type='number' ref={teluguMarksInputRef}
                    
                onFocus = { () => {
                    console.log("telugu on focus");
                    teluguMarksInputRef.current.style.backgroundColor = "#bdc3c7";
                }}
                onChange = { () => {
                    console.log("telugu on change");
                    let marks =Number(teluguMarksInputRef.current.value);
                    teluguResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    // teluguResultSpanRef.current.style.backgroundColor = marks>=35? "green":"#bdc3c7";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("telugu on blur");
                    teluguMarksInputRef.current.style.backgroundColor = "";
                }}
            
            ></input>
            <span ref={teluguResultSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hindiMarksInputRef}

                onFocus = { () => {
                    console.log("hindi on focus");
                    hindiMarksInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange = { () => {
                    console.log("hindi on change");
                    let marks = hindiMarksInputRef.current.value;
                    hindiResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("hindi on blur");
                    hindiMarksInputRef.current.style.backgroundColor ="";
                }}
            
            ></input>
            <span ref={hindiResultSpanRef}></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={englishMarksInputRef}

                onFocus = { () => {
                    console.log("english on focus");
                    englishMarksInputRef.current.style.backgroundColor ="#bdc3c7";
                }}  
                onChange = { () => {
                    console.log("english on change");
                    let marks = englishMarksInputRef.current.value;
                    englishResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("english on blur");
                    englishMarksInputRef.current.style.backgroundColor ="";
                }}
            ></input>
            <span ref={englishResultSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={mathsMarksInputRef}

                onFocus = { () => {
                    console.log("maths on focus");
                    mathsMarksInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange = { () => {
                    console.log("maths on change");
                    let marks = mathsMarksInputRef.current.value;
                    mathsResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("maths on blur");
                    mathsMarksInputRef.current.style.backgroundColor ="";
                }}
            
            ></input>
            <span ref={mathsResultSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={scienceMarksInputRef}

                onFocus = { () => {
                    console.log("science on focus");
                    scienceMarksInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange = { () => {
                    console.log("science on change");
                    let marks = scienceMarksInputRef.current.value;
                    scienceResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("science on blur");
                    scienceMarksInputRef.current.style.backgroundColor ="";
                }}
            
            ></input>
            <span ref={scienceResultSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={socialMarksInputRef}

                onFocus = { () => {
                    console.log("social on focus");
                    socialMarksInputRef.current.style.backgroundColor ="#bdc3c7";
                }}
                onChange = { () => {
                    console.log("social on change");
                    let marks = socialMarksInputRef.current.value;
                    socialResultSpanRef.current.innerHTML = marks>=35?"✔️ Pass":"❌ Fail";
                    console.log(marks>=35?"Pass":"Fail");
                }}
                onBlur = { () => {
                    console.log("social on blur");
                    socialMarksInputRef.current.style.backgroundColor ="";
                }}
            
            ></input>
            <span ref={socialResultSpanRef}></span>
        </div>
        </fieldset>
        <div>
            <button type="button"
            
            onMouseMove={ () => {

                        let firstName =  firstNameInputRef.current.value;
                        let lastName =lastNameInputRef.current.value;

                        let teluguMarks = Number(teluguMarksInputRef.current.value);
                        let hindiMarks = Number(hindiMarksInputRef.current.value);
                        let englishMarks = Number(englishMarksInputRef.current.value);
                        let mathsMarks = Number(mathsMarksInputRef.current.value);
                        let scienceMarks = Number(scienceMarksInputRef.current.value);
                        let socialMarks = Number(socialMarksInputRef.current.value);


                        let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
                        let percentage = (totalMarks/600)*100;

                        resultParagraphRef.current.innerHTML = `${firstName} ${lastName} Total marks ${totalMarks} with (${percentage.toFixed(2)}%)`;



            }}
            
            
            >Calculate Result</button>
        </div>
      </form>
      <p ref={resultParagraphRef}></p>
    </div>
  )
}

export default EventsMouseMoveBlurFocusChange
