
import { useState } from "react";
import "./App.css";
// import JsxDemo from "./component/JsxDemo";
import DemoProps from "./component/DemoProps";
import DigitalCard from "./component/DigitalCard";
import DoubleCard from "./component/DoubleCard";

function App() {
  const [job, setjob] = useState(true);
  const changeJob = () => {
    setjob(!job);
    console.log(job)
  };

  return (
    <div className="App">
      
      {/* <h1>hello world</h1>
      <br/>
      <div class="form-check d-flex justify-content-center">
        <input
          class="form-check-input fs-2 me-2"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={changeJob}
        />
        <label class="form-check-label fs-3" for="flexSwitchCheckDefault">
          Are you from Computer Dipartment?
        </label>
      </div>
      <DemoProps job={job} /> */}
      {/* <DigitalCard/> */}
      <DoubleCard/>
    </div>
  );
}

export default App;
