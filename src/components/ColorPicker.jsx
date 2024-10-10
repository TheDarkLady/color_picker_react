import React, { useEffect } from 'react'
import { useState } from 'react'
export default function ColorPicker() {
    const [color, setColor] = useState('#fff')
    const [textColor, setTextColor] = useState('#000')
    const [inputBorder, setInputBorder] = useState('1px solid black')
    useEffect(() => {
        document.body.style.backgroundColor = color
        if(color === '#fff'|| color === '#ffffff'){
            setTextColor('#000')
            setInputBorder('1px solid black')
        }
        else{
            setTextColor('#fff')
            setInputBorder('none')
        }
    },[color])
  return (
    <>
       <div style={{style:"padding:20px"}}>
        <h1 style={{color:textColor}}>Choose the color</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{width:"100px",height:"50px", borderRadius:"10px", border:inputBorder}}/>
      </div>
      <p style={{color:textColor}}>selected color : {color}</p>
    </>
  )
}
