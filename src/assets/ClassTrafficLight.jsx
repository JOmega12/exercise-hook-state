import { Component } from "react";

export class ClassTrafficLight extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lightIndex: 0,
  
    }
  }

  render() 
  {
    const {lightIndex} = this.state;
    const {lights} = this.props;
    const currentLight = lights[lightIndex];

    const lastLight = this.state.lightIndex === lights.length - 1;

    const addLightIndex = () => {
      if(lastLight) {
        this.setState({lightIndex: this.state.lightIndex - 2});
      } else {
        this.setState({lightIndex: this.state.lightIndex + 1});
      }
    }

    const backgroundColor = (color) => {
      return currentLight.name === color ? color : 'black';
    }
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className="circle red"
            style={{backgroundColor: backgroundColor('red')}} 
          ></div>
          <div className="circle black"
            style={{backgroundColor: backgroundColor('yellow')}} 
          ></div>
          <div className="circle black"
            style={{backgroundColor: backgroundColor('green')}} 
          ></div>
        </div>
        <button className="next-state-button"
          onClick={addLightIndex}
        >Next State</button>
      </div>
    );
  }
}
