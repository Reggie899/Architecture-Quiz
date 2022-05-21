import {useContext, useEffect} from "react";
import {Mainstream} from "../Contexts/Mainstream"; 
import {Specific} from "../Contexts/Specific";
import {Traditional} from "../Contexts/Traditional";
import {Modern} from "../Contexts/Modern";
import {QuestionCounter} from "../Contexts/QuestionCounter"




export default function Question2() {
    const { question, setQuestion } = useContext(QuestionCounter);
    const { modern, setModern } = useContext(Modern);
    const { traditional, setTraditional } = useContext(Traditional);
    const { mainstream, setMainstream } = useContext(Mainstream);
    const { specific, setSpecific } = useContext(Specific);
  
    const traditionalSpecific = () => {
      setTraditional((traditional) => traditional + 1);
      setSpecific((specific) => specific + 1);
      setQuestion((question) => question + 1);
      window.scrollTo(0, 0);
    };
  
    const traditionalMainstream = () => {
      setTraditional((traditional) => traditional + 1);
      setMainstream((mainstream) => mainstream + 1);
      setQuestion((question) => question + 1);
      window.scrollTo(0, 0);
    };
  
    const modernSpecific = () => {
      setModern((modern) => modern + 1);
      setSpecific((specific) => specific + 1);
      setQuestion((question) => question + 1);
      window.scrollTo(0, 0);
    };
  
    const modernMainstream = () => {
      setModern((modern) => modern + 1);
      setMainstream((mainstream) => mainstream + 1);
      setQuestion((question) => question + 1);
      window.scrollTo(0, 0);
    };
  
    useEffect(() => {
        console.log("test -modern:", modern, "mainstream:", mainstream );
        
    }, [])
  
    return (
      <div>
        <h1>
          2. Pick your favorite tiles: 
        </h1>
        <button onClick={modernMainstream}>Test</button>
      </div>
    );
  }
  