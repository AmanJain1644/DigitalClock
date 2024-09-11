import React, { useEffect, useState } from 'react';

export const DigitalClock = () => {

  const[time,setTime]=useState(new Date());
  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date());      
    }, 1000);

    return ()=>{
      clearInterval(interval);
    } 
  },[]);

  function padZero(num){
    return (num<10?'0':'') + num;
  }

  function timeFormat(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let maridian = hours >=12? "PM":"AM";
    hours=hours%12==0?12:hours%12;

    return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(maridian)}`);
  }
  return (
    <div>
  <div className="bg-[url('https://images.unsplash.com/photo-1624104416015-f0ef71c7800a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-screen bg-cover bg-no-repeat bg-fixed bg-bottom flex justify-center items-center">
    <div className="w-full h-72 sm:h-96 md:h-[50vh] lg:h-[60vh] xl:h-[70vh] backdrop-blur-md text-white">
      <div className="drop-shadow-2xl font-mono shadow-stone-950 flex items-center justify-center text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] h-full w-full">
        {timeFormat()}
      </div>
    </div>
  </div>
</div>

  )
}
