import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question4() {
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
      <h1>4. Which of these is your favorite activity? :</h1>
      <div className="">
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="partying"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="eating"
          />
        </div>
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="netflix"
          />
        </div>
        <div onClick={traditionalMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/4164459/pexels-photo-4164459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="working out "
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/7004710/pexels-photo-7004710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="reading"
          />
        </div>
        <div onClick={modernSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/287398/pexels-photo-287398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="biking"
          />
        </div>
        <div onClick={traditionalSpecific} className=" ">
          <img
            src="https://images.pexels.com/photos/939722/pexels-photo-939722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="hiking"
          />
        </div>
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/1856488/pexels-photo-1856488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="traveling"
          />
        </div>
        <div onClick={modernMainstream} className=" ">
          <img
            src="https://images.pexels.com/photos/9072287/pexels-photo-9072287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="gaming"
          />
        </div>
      </div>{" "}
    </div>
  );
}
