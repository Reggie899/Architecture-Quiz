import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question7() {
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
      <h1>7. What animal represents you? </h1>
      <div className="">
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/9713368/pexels-photo-9713368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="tiger"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="turtle"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/946344/pexels-photo-946344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="crow"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="hummingbird"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/2683946/pexels-photo-2683946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="owl"
          />
        </div>
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/686094/pexels-photo-686094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="dog"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/7658182/pexels-photo-7658182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="firefly"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="cat"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/918596/pexels-photo-918596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="wolf"
          />
        </div>
      </div>{" "}
    </div>
  );
}
