import React from 'react'
import './Empty.css'
import { ReactComponent as Line } from "../../assets/arrow.svg";

function Empty() {
  return (
    <div>
      <h1 className="text-h2">
        <Line className='line'/>
        <span>Who</span> we are
      </h1>
    </div>
  );
}

export default Empty