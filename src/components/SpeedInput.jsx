import React from "react";
const scaleNames = {
  km: "km per hour ",
  mi: "mi per hour.",
};

class SpeedInput extends React.Component {
  constructor(props) {
    super(props)
  }

 
  render() {
    const speed = this.props.speed;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter speed in {scaleNames[scale]}:</legend>
        <input type="number" value={speed} onChange={(e)=>this.props.changeSpeed(e.target.value)} />
       
      </fieldset>
    );
  }
}

export default SpeedInput;
