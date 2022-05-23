import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question8() {
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
    <div className="flexDisplay4">
      <h1 className="h1Question">
        8. Would you consider plastic surgery? 
      </h1>
      <div className="grid4">
    <div onClick={traditionalMainstream} className="withinGrid4"><p>No way!</p></div>
    <div onClick={modernMainstream} className="withinGrid4"><p>No, but I might change my mind. Who knows.</p></div>
    <div onClick={modernMainstream} className="withinGrid4"><p>I am thinking about it.</p></div>
    <div onClick={traditionalSpecific} className="withinGrid4"><p>Yes, absolutely!</p></div>
    </div>    </div>
  );
}
