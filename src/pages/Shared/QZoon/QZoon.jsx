import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZoon = () => {
  return (
    <div className="bg-info rounded p-3">
      <h5 className="fw-bold">Q-Zone</h5>
      <div className="">
        <img className="img-fluid my-3" src={qZone1} alt="Swimming" />
        <img className="img-fluid my-3" src={qZone2} alt="Class" />
        <img className="img-fluid my-3" src={qZone3} alt="Play Ground" />
      </div>
    </div>
  );
};

export default QZoon;
