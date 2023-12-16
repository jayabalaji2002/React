import React, { useState } from 'react';
import './Additem.scss'

function Additem() {

  const [color, setColor] = useState(["pink"]);
  const [newColor, setNewColor] = useState("");

  const addColor = () => {
    setColor([...color, newColor]);
    setNewColor("");
  }

  return (
    <div className='containers'>
      <ul className='additemul'>
        {color.map((value) => {
          return <li className='additemli'>{value}</li>;
        })}
      </ul>
      <div className='innerContainer1'>
        <input type='text' value={newColor} onChange={(e) => setNewColor(e.target.value)} className='additeminp1' />
        <button onClick={addColor} className='additembtn1'>Add New Color</button>
      </div>
    </div>
  )
}

export default Additem