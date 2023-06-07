import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      light: 2, /* 2=red, 1=yellow, 0=green */
    }
  }

  onClickNextState = () => {
    let light = this.state.light;
    if (light < 2) {
        this.setState({light: ++light})
    } else {
        this.setState({light: 0})
    }
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={this.state.light === 2 ? "circle red" : "circle black"}></div>
          <div className={this.state.light === 1 ? "circle yellow" : "circle black"}></div>
          <div className={this.state.light === 0 ? "circle green" : "circle black"}></div>
        </div>
        <button onClick={this.onClickNextState} className="next-state-button">Next State</button>
      </div>
    );
  }
}
