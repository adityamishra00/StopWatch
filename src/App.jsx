
import './App.css';
import { useState, useTimer } from 'use-timer';
const App=()=> {
  const {time,start,pause,reset,status}=useTimer();

  return (
    <div className="box">
      <div className='heading'>
        <h1>Stop Watch</h1>
      </div>
    <div className="buttons">
      <button onClick={start} className='button1'>Start</button>
      <button onClick={pause} className='button2'>Pause</button>
      <button onClick={reset} className='button3'>Reset</button>
    </div>
<div>
<p>Start Timer: {time}</p>
{status === 'RUNNING' && <p>RUNNING....</p>}
</div>
  
    </div>
  )
}

export default App
