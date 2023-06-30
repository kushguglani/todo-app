import React from "react";
import Todos from "./components/Todo";
import SpeedInput from "./components/SpeedInput";
import Calculator from "./components/Calculator ";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className='text-center'> Speed</h1>
     
          <Calculator />
      </div>
    );
  }
}

export default App;
