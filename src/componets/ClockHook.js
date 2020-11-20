import React, { useState, useEffect } from 'react';

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000
    )
  
    return () => clearInterval(timerID);
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, 使用hook的时钟!</h1>
      <h2>It is { date.toLocaleTimeString() }.</h2>    
    </div>
  );
}
