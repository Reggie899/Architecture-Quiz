import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

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
    console.log("test -modern:", modern, "mainstream:", mainstream);
  }, []);

  return (
    <div>
      <h1>2. Pick your favorite tiles:</h1>
      <div className="">
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="pink/blue/abstract"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/260286/pexels-photo-260286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="kegels"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/206935/pexels-photo-206935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="green/bown/flowers"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/3645123/pexels-photo-3645123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="brown circles"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/2254103/pexels-photo-2254103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="yellow/black/vertical"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/7245524/pexels-photo-7245524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="blue flowers"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://www.pexels.com/de-de/foto/kunst-bau-muster-textur-7677994/"
            alt="marble"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/7077990/pexels-photo-7077990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="blue lines"
          />
        </div>
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/7245518/pexels-photo-7245518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="blue squares"
          />
        </div>
      </div>{" "}
    </div>
  );
}
