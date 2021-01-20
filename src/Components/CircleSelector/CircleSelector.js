import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  return (
    <div className='CircleSelector'>
      <button onClick={props.handler} value={1}>Circle 1</button>
      <button onClick={props.handler} value={2}>Circle 2</button>
      <button onClick={props.handler} value={3}>Circle 3</button>
      <button onClick={props.handler} value={4}>Circle 4</button>
    </div>
  )
}

export default CircleSelector