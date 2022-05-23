import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question9() {
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
        9. You are out with a friend, what drink do you order? 
      </h1>
      <div className="">
    <div onClick={modernSpecific} className=""><p>Just water! Thanks!</p></div>
    <div onClick={modernSpecific} className=""><p>A tasteful red wine.</p></div>
    <div onClick={modernSpecific} className=""><p>Whisky for me, please</p></div>
    <div onClick={modernMainstream} className=""><p>Beer!</p></div>
    <div onClick={modernMainstream} className=""><p>I’ll check on the happy hour cocktails!</p></div>
    <div onClick={traditionalSpecific} className=""><p>I’m picking a lemonade or some juice.</p></div>
    <div onClick={traditionalSpecific} className=""><p>I’ll if they call a drink the speciality of their place and take that. </p></div>
    <div onClick={modernSpecific} className=""><p>I am a gin lover.</p></div>
    </div>    </div>
  );
}
