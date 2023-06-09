import { useState } from "react";

export const FunctionalTrafficLight = ({ lights }) => {
  const [lightIndex, setLightIndex] = useState(0);
  const isFirstLight = lightIndex === lights.length - 3;
  const isLastLight = lightIndex === lights.length - 1;
  const isNextLight = lightIndex === lights.length - 2;

  const increment = () => {
    if (isFirstLight) {
      setLightIndex(lightIndex + 2);
    } else {
      setLightIndex(lightIndex - 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={isFirstLight ? "circle red" : "circle black"}></div>
        <div className={isNextLight ? "circle yellow" : "circle black"}></div>
        <div className={isLastLight ? "circle green" : "circle black"}></div>
      </div>
      <button className="next-state-button" onClick={increment}>
        Next State
      </button>
    </div>
  );
};
