import React, { useState } from 'react'

function Colorpicker() {
    const [color,setColor]=useState("#697565");
    function handleColorPicker(e){
        setColor(e.target.value);
    }
  return (
    <div className='color-picker-container'>

      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor:color}}>
        <p>Selected Color:{color}</p>
        <label > select a color:</label>
        <input type="color" value={color} onChange={handleColorPicker} />
            
      </div>
      
    </div>
  )
}

export default Colorpicker