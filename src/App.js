/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import './App.css';


function App() {
  return (
    
   <div>
      <h1>
        Counter increase and decrement
      </h1>
      <p> {value}</p>
      
      <button className='btn' onClick={()=> setValue(value +1)}> increase </button>
      <button className='btn' onClick={()=> setValue(value -1)}> decrease </button>
      <button className='btn' onClick={()=> setValue(0)}> Reset </button>
    </div>
   
   
  );
}

export default App;
