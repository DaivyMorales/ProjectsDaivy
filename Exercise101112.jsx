import React, { useState } from 'react'

const Exercise101112 = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const container = {
        weight: '255px',
        height: '255px',
        backgroundColor: `rgb(${red},${green},${blue})`
    }
    
    function onMouseColor(){
        setRed(Math.floor((Math.random() * (255 - 1 + 1)) + 1))
        setGreen(Math.floor((Math.random() * (255 - 1 + 1)) + 1))
        setBlue(Math.floor((Math.random() * (255 - 1 + 1)) + 1))
    }

    function onMouseNotColor(){
        setRed(0)
        setGreen(0)
        setBlue(0)
    }

  return (
        <div onMouseMove={onMouseColor} onMouseOut={onMouseNotColor} onDoubleClick={onMouseNotColor} style={container}>
            <h1>COLORS</h1>
        </div>
  )
}

export default Exercise101112