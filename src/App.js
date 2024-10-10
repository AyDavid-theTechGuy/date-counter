import { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [ count , setCount ] = useState(0);
  const [ step , setStep ] = useState(1);

  const btnStyle = {
    padding: "0px 3px", 
    margin: "0px 1px",
    fontSize: "18px"
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div style={{paddingBottom: "7px"}}>
        <input 
          type="range" 
          min="0" 
          max="10" 
          onChange={(e) => setStep(Number(e.target.value))}  
        />
        <span style={{ paddingLeft: "5px"}}>Step: {step}</span>
      </div>

      <div style={{paddingBottom: "7px"}}>
        <button style={btnStyle} onClick={() => setCount((c) => c - step)}>-</button>
        <input 
          type="text" 
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))} 
          style={btnStyle}
        />
        <button style={btnStyle} onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0 
            ? "Today is " 
            : count > 0 
            ? `${count} days from today is ` 
            : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>

      {(count !== 0 || step !== 1) ? <div>
        <button style={{ padding: "1px 7px", margin: "7px 0px", fontSize: "18px" }} onClick={handleReset}>Reset</button>
      </div> : null }
    </>
  )
}