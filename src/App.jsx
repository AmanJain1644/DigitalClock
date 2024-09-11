import { useEffect, useState } from 'react'
import './App.css'
import { DigitalClock } from './DigitalClock'

function App() {
  const[time,setTime]=useState(new Date());
  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date());      
    }, 1000);

    return ()=>{
      clearInterval(interval);
    } 
  },[]);

  function timeFormat(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let maridian = hours >=12? "PM":"AM";

    return (`${hours}:${minutes}:${seconds} ${maridian}`);
  }
  return (
    <DigitalClock>

    </DigitalClock>
  )
}

export default App
