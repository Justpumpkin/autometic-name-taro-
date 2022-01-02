import React from 'react';
import './dist/css/min/App.min.css';
import Inputs from './components/Inputs';
import InputForms from './components/InputForms';

function App() {
  return (
    <div className="App">
      <form>
        <InputForms index="first" />
        

        <div id="secondName">
          <span>Second Name</span>
          <div class="firstText">
            <Inputs textIndex={1} letterIndex={1} />
            <Inputs textIndex={1} letterIndex={2} />
            <Inputs textIndex={1} letterIndex={3} />
          </div>

          <div class="secondText">
            <Inputs textIndex={2} letterIndex={1} />
            <Inputs textIndex={2} letterIndex={2} />
            <Inputs textIndex={2} letterIndex={3} />
          </div>

          <div class="thirdText">
            <Inputs textIndex={3} letterIndex={1} />
            <Inputs textIndex={3} letterIndex={2} />
            <Inputs textIndex={3} letterIndex={3} />
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
