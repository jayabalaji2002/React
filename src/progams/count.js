import React, { useState } from 'react';
import './count.scss';
const Count = () => {

  const [count, setCount] = useState(0);
  // var neg = document.getElementById("negativeDiv");
        
  const renderMessage = () => {
    if (count < 0) {
      return <div className='negValue'>Negative Value</div>;
    }
    else if(count === 0){
      return <div className='negValue'>Null Value</div>;
    }else{
      return <div className='negValue'>Positive Value</div>;
    }
  }
  const increment = () => {
    return setCount(count + 1);
    
  }

  const decrement = () => {
    return setCount(count - 1);
  }
  return (
    <div className='mainContainer'>
      <h1>Count Program</h1>
      <div className='container'>
        <h2 className='countDisplay'>Count: {count}</h2>
        {renderMessage()}
        <button onClick={decrement} className='Btn decBtn'>Decrement</button>
        <button onClick={increment} className='Btn incBtn'>Increment</button>
      </div>
    </div>
  )
}

export default Count;