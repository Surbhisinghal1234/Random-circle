import React, { useState } from 'react';
import './App.css';
import SpecificColors from './page/SpecificColos';
import RandomColors from './page/RandomColors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <RandomColors />, 
        },

        {
            path:"/specific",
            element:<SpecificColors/>
            
        }
      ]);

  return (
   <>
<RouterProvider  router = {router}/>
   </>
  );
}

export default App;
