import React, { useState } from "react";
import { Link } from "react-router-dom";

const RandomColors = () => {
  const [circles, setCircles] = useState([]);
  const [deleted, setDeleted] = useState([]);

  function handleClick(e) {
    const colorGenerator = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += colorGenerator[Math.floor(Math.random() * 16)];
    }

    const newCircle = {
      id: Date.now(),  
      coordinates: {  
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
      color: randomColor,
    };

    setCircles([...circles, newCircle]);
    setDeleted([]); 
  }

  // Reset
  function handleReset() {
    setCircles([]);
    setDeleted([]);
  }

  // Undo 
  function handleUndo() {
    const lastCircle = circles.pop(); 
    if (lastCircle) {
      setDeleted([...deleted, lastCircle]); 
      setCircles([...circles]); 
    }
  }

  // Redo
  function handleRedo() {
    const lastDeleted = deleted.pop(); 
    if (lastDeleted) {
      setCircles([...circles, lastDeleted]); 
      setDeleted([...deleted]); 
    }
    
  }
  
  console.log(circles)
  console.log(deleted)

  return (
    <>
      <div className="flex justify-center my-4 gap-4 ">
        <button
          onClick={handleReset}
          disabled={circles.length === 0}
          className={`px-4 py-2 font-medium rounded-md shadow-sm ${
            circles.length === 0
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-red-800 text-white hover:bg-red-700"
          }`}
        >
          Reset
        </button>
        <button
          onClick={handleUndo}
          disabled={circles.length === 0}
          className={`px-4 py-2 font-medium rounded-md shadow-sm ${
            circles.length === 0
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-slate-700 text-white hover:bg-gray-800"
          }`}
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={deleted.length === 0}
          className={`px-4 py-2 font-medium rounded-md shadow-sm ${
            deleted.length === 0
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-800"
          }`}
        >
          Redo
        </button>
      </div>
      <div className="relative w-[70%] h-[80vh] bg-gray-300 rounded-md shadow-black shadow-sm m-auto" onClick={handleClick}>
        {circles.map((circle, index) => (
          <div
            key={index}
            className="absolute z-50 w-[1rem] h-[1rem] rounded-full"
            style={{
              left: circle.coordinates.x - 10,
              top: circle.coordinates.y - 10,
              backgroundColor: circle.color,
            }}
          />
        ))}
      </div>
      {/* <div className="bg-slate-800 px-4 py-2 text-white rounded-md inline-block ml-[3rem]">
        <Link to="/specific">Specific color circle →</Link>
      </div> */}
    </>
  );
};

export default RandomColors;

