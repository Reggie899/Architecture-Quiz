import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question3() {
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
      <h1 className="h1Question">
        3. If one asked your best friend, what would they say your best trait is? 
      </h1>
      <div className="grid8">
        <div onClick={traditionalSpecific} className="withinGrid">
          <p>
          dependable and trustworthy{" "}
          </p>
        </div>
        <div onClick={modernMainstream} className="withinGrid">
          <p>
            creative{" "}
          </p>
        </div>
        <div onClick={modernSpecific} className="withinGrid">
          <p>
            funny{" "}
          </p>
        </div>
        <div onClick={traditionalSpecific} className="withinGrid">
          <p>
          being understanding and good listener
          </p>
        </div>
        <div onClick={modernSpecific} className="withinGrid">
          <p>
          self-confident and inspiring 
          </p>
        </div>
        <div onClick={traditionalMainstream} className="withinGrid">
          <p>honest</p>
        </div>
        <div onClick={traditionalMainstream} className="withinGrid">
          <p>
           loyal
          </p>
        </div>
        <div onClick={modernMainstream} className="withinGrid">
          <p>supportive</p>
        </div>
      </div>{" "}
    </div>
  );
}
