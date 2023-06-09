import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightIndex: 0,
    };
  }

  render() {
    const { lights } = this.props;
    const isFirstLight = this.state.lightIndex === lights.length - 3;
    const isLastLight = this.state.lightIndex === lights.length - 1;
    const isNextLight = this.state.lightIndex === lights.length - 2;

    const addLightIndex = () => {
      if (isFirstLight) {
        this.setState({ lightIndex: this.state.lightIndex + 2 });
      } else {
        this.setState({ lightIndex: this.state.lightIndex - 1 });
      }
    };

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={isFirstLight ? "circle red" : "circle black"}></div>
          <div className={isNextLight ? "circle yellow" : "circle black"}></div>
          <div className={isLastLight ? "circle green" : "circle black"}></div>
        </div>
        <button className="next-state-button" onClick={addLightIndex}>
          Next State
        </button>
      </div>
    );
  }
}
