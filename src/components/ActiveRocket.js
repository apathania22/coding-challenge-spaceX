import React from "react";
import "./ActiveRocket.css";
import Description from "./Description";

export default function ActiveRocket(props) {
  const convert = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? Math.abs(Number(labelValue)) / 1.0e9 + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? Math.abs(Number(labelValue)) / 1.0e6 + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? Math.abs(Number(labelValue)) / 1.0e3 + "K"
      : Math.abs(Number(labelValue));
  };

  const showDescription = (e) => {
    return <Description descrip={props.active} />;
  };

  console.log(props.active);
  return (
    <div>
      <div className="activeRocket" onClick={showDescription}>
        <div className="elements separator">
          {props.active.rocket.rocket.name}
        </div>
        <div className="elements">
          {convert(props.active.rocket.rocket.cost_per_launch)}
        </div>
        <div className="elements">{props.active.rocket.rocket.description}</div>
      </div>
      {showDescription}
    </div>
  );
}
