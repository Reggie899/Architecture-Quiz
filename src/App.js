import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faHouse, faChurch,
faHotel, faIgloo, faToriiGate, faCastle, faCabin, faTreeCity, faBuilding, 
faMountainCity, faShop } from '@fortawesome/free-solid-svg-icons';
import { Span, ArchitectureIcon } from "./AnimationFrontPage.style";

import { useState } from "react";
import "./App.css";

// import Questions and Result Components
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import Question6 from "./Questions/Question6";
import Question7 from "./Questions/Question7";
import Question8 from "./Questions/Question8";
import Question9 from "./Questions/Question9";
import Result from "./Result";

//import Contexts
import { QuestionCounter } from "./Contexts/QuestionCounter";
import { Modern } from "./Contexts/Modern";
import { Traditional } from "./Contexts/Traditional";
import { Specific } from "./Contexts/Specific";
import { Mainstream } from "./Contexts/Mainstream";

function App() {
  // useState set up
  const [question, setQuestion] = useState(0);
  const [modern, setModern] = useState(0);
  const [traditional, setTraditional] = useState(0);
  const [mainstream, setMainstream] = useState(0);
  const [specific, setSpecific] = useState(0);


// const goThroughArray = animationIconArray.map(icon => {console.log("icon", icon.iconName);
//   return icon.iconName});

  let animationIconArray = [faHouse, faBuildingColumns, faToriiGate ]; 
  let icon = animationIconArray[0];

  // FrontPage Component to start with:
  const FrontPage = () => (
    <div className="displayFrontPage">
      <div className="frontSide1">
        {" "}
        <h1 className="h1Question h1FrontPage"> Which Type Of <Span><span className="architecture">Architecture</span></Span>Are You?</h1>
       <div className="buttonFrontDiv"> <button className="buttonFrontPage" onClick={startQuiz}>Start</button></div>
      </div>
      <div className="displayAnimation">
        {/* 15 */} 
        here goes the animation - test?
        <ArchitectureIcon>
        <FontAwesomeIcon className='icon icon1' icon={icon}/>
        {/* <FontAwesomeIcon className='icon icon1' icon={faHouse}/> */}
        {/* <FontAwesomeIcon className='icon icon2' icon={faBuildingColumns}/>
        <FontAwesomeIcon className='icon icon3' icon={faToriiGate}/>
        <FontAwesomeIcon className='icon icon4' icon={faHouse}/>
        <FontAwesomeIcon className='icon icon5' icon={faBuilding}/>
        <FontAwesomeIcon className='icon icon6' icon={faHotel}/>
        <FontAwesomeIcon className='icon icon7' icon={faHouse}/>
        <FontAwesomeIcon className='icon icon8' icon={faIgloo}/>
        <FontAwesomeIcon className='icon icon9' icon={faChurch}/>
        <FontAwesomeIcon className='icon icon10' icon={faBuilding}/>
        <FontAwesomeIcon className='icon icon11' icon={faTreeCity}/>
        <FontAwesomeIcon className='icon icon12' icon={faBuilding}/>
        <FontAwesomeIcon className='icon icon13' icon={faMountainCity}/>
        <FontAwesomeIcon className='icon icon14' icon={faHouse}/>
        <FontAwesomeIcon className='icon icon15' icon={faShop}/> */}
        </ArchitectureIcon>
        </div>
        </div>
  );

  function startQuiz() {
    setQuestion((question) => question + 1);
  }

  return (
    <div className="App">
      {question === 0 ? <FrontPage /> : null}
      <QuestionCounter.Provider value={{question, setQuestion}}>
        <Mainstream.Provider value={{mainstream, setMainstream}}>
          <Specific.Provider value={{specific, setSpecific}}>
            <Modern.Provider value={{modern, setModern}}>
              <Traditional.Provider value={{traditional, setTraditional}}>
                {question === 1 ? <Question1 /> : null}
                {question === 2 ? <Question2 /> : null}
                {question === 3 ? <Question3 /> : null}
                {question === 4 ? <Question4 /> : null}
                {question === 5 ? <Question5 /> : null}
                {question === 6 ? <Question6 /> : null}
                {question === 7 ? <Question7 /> : null}
                {question === 8 ? <Question8 /> : null}
                {question === 9 ? <Question9 /> : null}
                {question === 10 ? <Result /> : null}
              </Traditional.Provider>
            </Modern.Provider>
          </Specific.Provider>
        </Mainstream.Provider>
      </QuestionCounter.Provider>
    </div>
  );
}

export default App;
