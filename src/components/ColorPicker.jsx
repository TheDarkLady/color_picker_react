import React, { useEffect } from 'react'
import { useState } from 'react'
export default function ColorPicker() {
    const [color, setColor] = useState('#fff')
    useEffect(() => {
        document.body.style.backgroundColor = color
    },[color])
  return (
    <>
       <div style={{style:"padding:20px"}}>
        <h1>Choose the color</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{width:"100px",height:"50px", borderRadius:"10px"}}/>
      </div>
      <p>selected color : {color}</p>
    </>
  )
}
