import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question1() {
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
      <h1 className="h1Question">
        1. You are invited to a party. How much effort do you put into dressing
        up?
      </h1>
      <div className="grid8">
    <div onClick={traditionalMainstream} className="withinGrid"><p>What do you mean? I am good to go as I am! I don’t need any styling. I brushed my teeth. That'll do it. </p></div>
    <div onClick={modernMainstream} className="withinGrid"><p>I want to look up to date fashion wise. If I don’t find something en vogue in my closet, I am going to buy something.  </p></div>
    <div onClick={modernMainstream} className="withinGrid"><p>I am choosing something very eccentric. I love to express myself that way. </p></div>
    <div onClick={traditionalSpecific} className="withinGrid"><p>As long as I find something clean and neat, I don’t particularly really care about fashion.</p></div>
    <div onClick={traditionalSpecific} className="withinGrid"><p>I dress very discreet. I want to avoid drawing too much attention to myself.</p></div>
    <div onClick={modernSpecific} className="withinGrid"><p>It depends on how I feel that day.</p></div>
    <div onClick={traditionalMainstream} className="withinGrid"><p>I like to dress in one or max two colors. All black or all white for example.</p></div>
    <div onClick={modernSpecific} className="withinGrid"><p>Anything that’s chic works for me.</p></div>
    </div>    </div>
  );
}
