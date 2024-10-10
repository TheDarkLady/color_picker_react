import React from 'react'
import { useState } from 'react'
export default function ColorPicker() {
    const [color, setColor] = useState('#fff')
  return (
    <>
       <div style={{style:"padding:20px"}}>
        <h1>Choose the color</h1>

      </div>
    </>
  )
}
