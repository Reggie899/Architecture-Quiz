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
    <div>
      <h1>
        3. If one asked your best friend, what would they say your best trait is? 
      </h1>
      <div className="">
        <div onClick={traditionalSpecific} className="">
          <p>
          dependable and trustworthy{" "}
          </p>
        </div>
        <div onClick={modernMainstream} className="">
          <p>
            creative{" "}
          </p>
        </div>
        <div onClick={modernSpecific} className="">
          <p>
            funny{" "}
          </p>
        </div>
        <div onClick={traditionalSpecific} className="">
          <p>
          being understanding and good listener
          </p>
        </div>
        <div onClick={modernSpecific} className="">
          <p>
          self-confident and inspiring 
          </p>
        </div>
        <div onClick={traditionalMainstream} className="">
          <p>honest</p>
        </div>
        <div onClick={traditionalMainstream} className="">
          <p>
           loyal
          </p>
        </div>
        <div onClick={modernMainstream} className="">
          <p>supportive</p>
        </div>
      </div>{" "}
    </div>
  );
}
