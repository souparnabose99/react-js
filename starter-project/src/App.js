import './App.css';
import  { useState } from "react"

function App() {

  const [count, setCount] = useState(0)
  console.log(useState(0))

  function subCounter(){
    setCount(count - 1)
  }

  function resetCounter(){
    setCount(0)
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 3)} className="add">ADD</button>
        <button onClick={subCounter} className="sub">SUB</button>
        <button onClick={resetCounter} className="reset">RESET</button>
      </div>
    </div>
  );
}

export default App;
