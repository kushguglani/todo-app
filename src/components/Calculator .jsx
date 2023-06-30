import React from "react";
import SpeedMonitor from "./SpeedMonitor";
import SpeedInput from "./SpeedInput";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { speed: "", sacle: "km" };
  }

  handleKmphChange = (speed)=> {
    this.setState({ scale: "km", speed });
  }

  handleMiphChange = (speed)=> {
    this.setState({ scale: "mi", speed });
  }
  toKmph = (miph) => {
    if (!Number.isNaN(miph)) return miph / 0.6213;
    else alert("enter no");
  };

  toMiph = (kmph) => {
    if (!Number.isNaN(kmph)) return kmph * 0.6213;
    else alert("enter no");
  };
  render() {
    const scale = this.state.scale;
    const speed = this.state.speed;
    const kmph = scale === "mi" ? this.toKmph(speed) : speed;
    const miph = scale === "km" ? this.toMiph(speed) : speed;
    return (
      <div>
        <SpeedInput
          scale="km"
          changeSpeed={this.handleKmphChange}
          speed={kmph}
        />
        <SpeedInput
          scale="mi"
          changeSpeed={this.handleMiphChange}
          speed={miph}
        />
        <SpeedMonitor kmph={kmph} />
      </div>
    );
  }
}
