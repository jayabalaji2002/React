import React, { useState } from 'react'
import './accord.scss'
const Accordian = () => {

  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show);
  }

  return (
    <div className='app'>
      <div className='accordian'>
        <div className='accordian-head'>
          <p>Accordian Head</p>
          <div className='sign' onClick={handleOpen}>
            {show ? '-' : '+'}
          </div>
        </div>
        <div>
          {show && <div className='accordian-body'>Hello Jayabalaji sdsislohfznczhfozxcfhjfjfishfusDDoHohodHDuoHO
            Hello Jayabalaji sdsislohfznczhfozxcfhjfjfishfusDDoHohodHDuoHO
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Accordian