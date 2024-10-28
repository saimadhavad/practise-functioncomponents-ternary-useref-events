import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import FCTablesStudentData from './components/FCTablesStudentData';
import FCTablesStudentHeading from './components/FCTablesStudentHeading';
import FCTableStudentData from './components/FCTableStudentData';
import TernaryOperators from './components/TernaryOperators';
import UseRefOnClickArrowFunction from './components/UseRefOnClickArrowFunction';
import EventsMouseMoveBlurFocusChange from './components/EventsMouseMoveBlurFocusChange';


function App() {
  return (
    <div className="App">
      <div>
            <div className="functionalComponent">        
              <div><h1>Without Functional Component</h1></div>     
              <div className="withoutFunctionalComponentDiv">
              
                <div className="playerDiv CSKColor">
                  <img src="./images/CSKImage.png" alt='CSKImage'></img>
                  <h3>Name : Ruturaj Gaikwad</h3>
                  <h4>Team : Chennai Super Kings (CSK)</h4>
                  <h4>Role : Batter</h4>
                </div>
                <div  className="playerDiv DCColor">
                <img src="./images/DCImage.png" alt=''></img>
                  <h3>Name : Rishabh Pant</h3>
                  <h4>Team : Delhi Capitals (DC)</h4>
                  <h4>Role : Wicketkeeper Batter</h4>
                </div>
              </div>
              <div><h1>with Functional component</h1></div>
              <div className="functionalComponentDiv">
                <FunctionalComponent colorName="CSKColor" teamsPicURL="./images/CSKImage.png" altTxt="CSKImage" name="Ruturaj Gaikwad" team="Chennai Super Kings (CSK)" role="Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/DCImage.png" altTxt="DCImage" name="Rishabh Pant" team="Delhi Capitals (DC)" role="Wicketkeeper Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/GTImage.png" altTxt="GTImage" name="Shubman Gill" team="Gujarat Titans (GT)" role="Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/KKRImage.png" altTxt="KKRImage" name="Shreyas Iyer" team="Kolkata Knight Riders (KKR)" role="Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/LSGImage.png" altTxt="LSGImage" name="KL Rahul" team="Lucknow Super Giants (LSG)" role="Wicketkeeper Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/MIImage.png" altTxt="MIImage" name="Hardik Pandya" team="Mumbai Indians (MI)" role="All-rounder"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/PKImage.png" altTxt="PKImage" name="Shikhar Dhawan" team="Punjab Kings (PBKS)" role="Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/RRImage.png" altTxt="RRImage" name="Sanju Samson" team="Rajasthan Royals (RR)" role="Wicketkeeper Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/RCBImage.png" altTxt="RCBImage" name="Faf du Plessis" team="Royal Challengers Bengaluru (RCB)" role="Batter"/>
                <FunctionalComponent colorName="" teamsPicURL="./images/SRHImage.png" altTxt="SRHImage" name="Pat Cummins" team="Sunrisers Hyderabad (SRH)" role="Bowler"/>
              </div>
            </div>

            <div className="functionalComponentTables">
                <div><h1>Functional Component Tables</h1></div>
                <div className="withoutfunctionalComponentTables">
                      <div><h3>withoutfunctionalComponentTables</h3></div>
                      <table>
                        <tr>
                          <th rowSpan={2}>Roll No.</th>
                          <th rowSpan={2}>Student Name</th>
                          <th rowSpan={2}>Max. Marks(for Each Subject)</th>
                          <th colSpan={6}>Marks Obtained</th>
                          <th rowSpan={2}>Total</th>
                          <th rowSpan={2}>Result</th>
                          <th rowSpan={2}>Remarks</th>
                        </tr>
                        <tr>
                          <th>Telugu</th>
                          <th>Hindi</th>
                          <th>English</th>
                          <th>Maths</th>
                          <th>Science</th>
                          <th>Social</th>
                        </tr>
                        <tr>
                          <th>1</th>
                          <th>CSK</th>
                          <th>100</th>
                          <th>95</th>
                          <th>85</th>
                          <th>75</th>
                          <th>86</th>
                          <th>99</th>
                          <th>80</th>
                          <th>520</th>
                          <th>Pass</th>
                          <th>Good</th>
                        </tr>
                        <tr>
                          <th>2</th>
                          <th>DC</th>
                          <th>100</th>
                          <th>90</th>
                          <th>95</th>
                          <th>82</th>
                          <th>100</th>
                          <th>85</th>
                          <th>89</th>
                          <th>541</th>
                          <th>Pass</th>
                          <th>Good</th>
                        </tr>
                      </table>
                </div>
                <div className="withfunctionalComponentTables">
                  <div>
                  <FCTablesStudentHeading />
                  <FCTablesStudentData rollno="1" studentName="CSK" maxmarks="100" 
                  telugu="95" hindi="85" english="75"  maths="86" science="99" social="80" 
                  total="520" result="Pass" remarks="Good" />
                  <FCTablesStudentData rollno="2" studentName="DC" maxmarks="100" 
                  telugu="90" hindi="95" english="82"  maths="100" science="85" social="89" 
                  total="541" result="Pass" remarks="Good" />
                  <FCTablesStudentData rollno="3" studentName="KKR" maxmarks="100" 
                  telugu="65" hindi="55" english="45"  maths="33" science="60" social="65" 
                  total="323" result="Fail" remarks="Poor" />
                  <FCTablesStudentData rollno="4" studentName="MI" maxmarks="100" 
                  telugu="35" hindi="40" english="55"  maths="35" science="40" social="35" 
                  total="240" result="Fail" remarks="Poor" />
                  <FCTablesStudentData rollno="5" studentName="RCB" maxmarks="100" 
                  telugu="98" hindi="95" english="85"  maths="100" science="95" social="96" 
                  total="569" result="Pass" remarks="Good" />  
                  </div>
                  <div className='studentMarkList'>
                    <FCTableStudentData name="CSK"
                        telugu="95" hindi="85" english="75"  maths="86" science="99" social="80" 
                        result="Pass" total="520" remarks="Good" overall="Excellent"
                    ></FCTableStudentData>
                    <FCTableStudentData name="DC"
                        telugu="90" hindi="95" english="82"  maths="100" science="85" social="89" 
                        total="541" result="Pass" remarks="Good" overall="Excellent"
                    ></FCTableStudentData>
                    <FCTableStudentData name="KKR"
                        telugu="65" hindi="55" english="45"  maths="33" science="60" social="65" 
                        total="323" result="fail" remarks="Average" overall="Poor"
                    ></FCTableStudentData>
                    <FCTableStudentData name="MI"
                        telugu="35" hindi="40" english="55"  maths="35" science="40" social="35" 
                        total="240" result="fail" remarks="Average" overall="Poor"
                    ></FCTableStudentData>
                    <FCTableStudentData name="RCB"
                        telugu="98" hindi="95" english="85"  maths="100" science="95" social="96" 
                        total="569" result="Pass" remarks="Good" overall="Excellent"
                    ></FCTableStudentData>
                    
                  </div>
                
                </div>
            </div>

            <div className="ternaryOperators">
              <div><h1>Ternary Operators</h1></div>
              <div>
              <TernaryOperators name="CSK" 
              teluguMarks="95" hindiMarks="85" englishMarks="75" mathsMarks="86"
              scienceMarks="99" socialMarks="80"
              ></TernaryOperators> 
               <TernaryOperators name="DC" maxmarks="100" 
                  teluguMarks="90" hindiMarks="95" englishMarks="82"  mathsMarks="100" 
                  scienceMarks="85" socialMarks="89" 
                  total="541" result="Pass" remarks="Good"></TernaryOperators>
               <TernaryOperators name="KKR" maxmarks="100" 
                  teluguMarks="65" hindiMarks="25" englishMarks="45"  mathsMarks="33" 
                  scienceMarks="30" socialMarks="65" 
                  total="323" result="Fail" remarks="Poor"></TernaryOperators>
               <TernaryOperators name="MI" maxmarks="100" 
                  teluguMarks="30" hindiMarks="34" englishMarks="15"  mathsMarks="35"  
                  scienceMarks="30" socialMarks="34" 
                  total="240" result="Fail" remarks="Poor"></TernaryOperators>
               <TernaryOperators name="RCB" maxmarks="100" 
                  teluguMarks="98" hindiMarks="95" englishMarks="85"  mathsMarks="100" 
                  scienceMarks="95" socialMarks="96" 
                  total="569" result="Pass" remarks="Good"></TernaryOperators>
              </div>
            </div>

            <div className="useRefOnClickArrowFunctions">
              <h1>useRef OnClick ArrowFunctions</h1>
              <UseRefOnClickArrowFunction></UseRefOnClickArrowFunction>
            </div>

            <div className="eventsMouseMoveBlurFocusChange">
              <h1>Events onMouseMove onBlur onChange onFocus</h1>
                <EventsMouseMoveBlurFocusChange></EventsMouseMoveBlurFocusChange>
            </div>
      </div>
    </div>
  );
}

export default App;
