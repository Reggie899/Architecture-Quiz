import { useContext, useEffect } from "react";
import { Mainstream } from "../Contexts/Mainstream";
import { Specific } from "../Contexts/Specific";
import { Traditional } from "../Contexts/Traditional";
import { Modern } from "../Contexts/Modern";
import { QuestionCounter } from "../Contexts/QuestionCounter";

export default function Question5() {
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
      <h1 className="h1Question">5. Pick your favorite dessert:</h1>
      <div className="grid9">
        <div onClick={modernMainstream} className="gridImages">
          <img
            src="https://images.pexels.com/photos/3625373/pexels-photo-3625373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Sorbet"
          />
        </div>
        <div onClick={modernSpecific} className="gridImages">
          <img
            src="https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Yoghurt"
          />
        </div>
        <div onClick={traditionalSpecific} className="gridImages">
          <img
            src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="berry cake"
          />
        </div>
        <div onClick={traditionalSpecific} className="gridImages">
          <img
            src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="brownie"
          />
        </div>
        <div onClick={modernMainstream} className="gridImages">
          <img
            src="https://images.pexels.com/photos/808923/pexels-photo-808923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="macarons"
          />
        </div>
        <div onClick={traditionalMainstream} className="gridImages">
          <img
            src="https://images.pexels.com/photos/2573870/pexels-photo-2573870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="natas"
          />
        </div>
        <div onClick={traditionalMainstream} className="gridImages">
          <img
            src="https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="pancakes"
          />
        </div>
        <div onClick={modernMainstream} className="gridImages">
          <img
            src="https://images.pexels.com/photos/838846/pexels-photo-838846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="berries and fruits"
          />
        </div>
        <div onClick={traditionalSpecific} className="gridImages">
          <img
            src="https://images.pexels.com/photos/1660916/pexels-photo-1660916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="coffee"
          />
        </div>
      </div>{" "}
    </div>
  );
}
