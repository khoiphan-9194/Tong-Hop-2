// Import `useEffect` Hook from React
import { useState, useEffect } from 'react';

function Thermostat() {
  // Set the starting temperature
  const [temp, setTemp] = useState(0);

  // TODO: Use the `useEffect` Hook to set the `document.title` to the current temperature
  // YOUR CODE HERE



  //


  const [count, setCount] = useState(0)

  useEffect(() => {
    const runCount = setInterval(()=>
  {
    setCount(count+1);
  },1000)
  return() =>clearInterval(runCount);
},[count]);
   



  useEffect(() => {
 
    window.document.title = `${temp}° Fahrenheit`;
  },[temp]);



  // Handler for increasing the temp by 1
  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  // Handler for decreasing the temp by 1
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
        Count: {count}
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={increaseTemp}
        >
          Raise temperature
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseTemp}
        >
          Lower temperature
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
