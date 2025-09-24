import logo from './logo.svg';
import './App.css';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5

}from './tone.fn';
import { playNote } from './tone.fn';
 window.addEventListener("keydown", playNote);
function App() {
  
  return (
    <div className="PianoPage">
      <h1>Piano</h1>
      <div className="Piano">
        <button className="key white" onClick={playC4}>A</button>
        <button className="key black" onClick={playDb4}>W</button>
        <button className="key white" onClick={playD4}>S</button>
        <button className="key black" onClick={playEb4}>E</button>
        <button className="key white" onClick={playE4}>D</button>
        <button className="key white" onClick={playF4}>F</button>
        <button className="key black" onClick={playGb4}>T</button>
        <button className="key white" onClick={playG4}>G</button>
        <button className="key black" onClick={playAb4}>Y</button>
        <button className="key white" onClick={playA4}>H</button>
        <button className="key black" onClick={playBb4}>U</button>
        <button className="key white" onClick={playB4}>J</button>
        <button className="key white" onClick={playC5}>K</button>
        </div>
        </div>


      
        
   
  );
}

export default App;
