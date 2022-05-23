import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question6() {
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
    console.log("test -modern:", modern, "mainstream:", mainstream);
  }, []);

  return (
    <div className="flexDisplay8">
      <h1 className="h1Question">6. What is your dream?</h1>
      <div className="grid8">
        <div onClick={traditionalMainstream} className="withinGrid">
          <p>Winning a Nobel prize.</p>
        </div>
        <div onClick={traditionalSpecific} className="withinGrid">
          <p>Making your parents proud.</p>
        </div>
        <div onClick={modernSpecific} className="withinGrid">
          <p>Becoming the top manager or founding your own company.</p>
        </div>
        <div onClick={modernSpecific} className="withinGrid">
          <p>Just being left alone and doing your thing is enough.</p>
        </div>
        <div onClick={modernMainstream} className="withinGrid">
          <p>Eternal youth and a beautiful body.</p>
        </div>
        <div onClick={traditionalSpecific} className="withinGrid">
          <p>Always acting with integrity.</p>
        </div>
        <div onClick={traditionalMainstream} className="withinGrid">
          <p>Making a lot of money and retiring early.</p>
        </div>
        <div onClick={modernMainstream} className="withinGrid">
          <p>Helping Elon Musk in getting humanity to Mars.</p>
        </div>
      </div>{" "}
    </div>
  );
}
