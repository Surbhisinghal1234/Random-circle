import React, { useState } from 'react';
import { COLORS } from '../data/colors';

const SpecificColors = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const newCircle = {
      x: e.clientX,  
      y: e.clientY,
      color: randomColor,
    };
    setCircles([...circles, newCircle]);
  };

  return (
    <>
      <div
        className="relative bg-gray-200 m-auto rounded-md h-screen w-full"  
        onClick={handleClick}
      >
        {circles.map((cir, ind) => (
          <div
            key={ind}
            className="absolute w-[1rem] h-[1rem] rounded-full"
            style={{
              left: cir.x - 10, 
              top: cir.y - 10,
              backgroundColor: cir.color,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default SpecificColors;
