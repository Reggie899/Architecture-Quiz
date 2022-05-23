import { useContext } from "react";
import { Mainstream } from "./Contexts/Mainstream";
import { Specific } from "./Contexts/Specific";
import { Traditional } from "./Contexts/Traditional";
import { Modern } from "./Contexts/Modern";
import { QuestionCounter } from "./Contexts/QuestionCounter";

export default function Result() {
  const { question, setQuestion } = useContext(QuestionCounter);
  const { modern, setModern } = useContext(Modern);
  const { traditional, setTraditional } = useContext(Traditional);
  const { mainstream, setMainstream } = useContext(Mainstream);
  const { specific, setSpecific } = useContext(Specific);

  const TimberFraming = () => (
    <div className="">
      <h2>The traditionalist</h2>{" "}
      <img src="https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p>
        You are timber framing as you love traditions, old objects and
        relationships that have proven stable. You are not living in the past
        though. Basically you carefully filter what is worth preserving and then
        take care of those chosen things carefully. The result is that you
        surround yourself with beautiful things that deserve your attention.
      </p>{" "}
    </div>
  );

  return <div>hh</div>;
}
