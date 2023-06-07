import {useState} from 'react';

export const FunctionalTrafficLight = () => {
  const [light, putLight] = useState(2);

  function onClickNextState() {
    if (light < 2) {
        putLight(light + 1);
    } else {
        putLight(0);
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={light === 2 ? "circle red" : "circle black"}></div>
        <div className={light === 1 ? "circle yellow" : "circle black"}></div>
        <div className={light === 0 ? "circle green" : "circle black"}></div>
      </div>
      <button onClick={onClickNextState} className="next-state-button">Next State</button>
    </div>
  );
};