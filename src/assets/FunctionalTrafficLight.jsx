import { useState } from "react";

export const FunctionalTrafficLight = ({lights}) => {

  const [lightIndex, setLightIndex] = useState(0);
  const currentLight = lights[lightIndex];
  const lastLight = lightIndex === lights.length - 1;

  const increment = ()=> {
    if (lastLight) {
      setLightIndex(lightIndex - 2)
    } else {
      setLightIndex(lightIndex + 1)
    }
  }

  const backgroundColor = (color) => {
    return currentLight.name === color ? color : 'black';
  }

   return (
     <div className="traffic-light-box">
       <h2>Functional Traffic Light</h2>
       <div className="traffic-light">
         {/* Background color can be black | yellow | red | green */}
         <div className='circle black'
          style={{backgroundColor:backgroundColor('red')}}
         ></div>
         <div className="circle yellow"
          style={{backgroundColor:backgroundColor('yellow')}}
          ></div>
         <div className="circle green"
          style={{backgroundColor:backgroundColor('green')}}
         ></div>
       </div>
       <button 
        className="next-state-button"
        onClick={increment}
       >
        Next State
      </button>
     </div>
   );
 };
 
 
 
 