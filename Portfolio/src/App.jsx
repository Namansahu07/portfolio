import React from 'react';
import Header from './Component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About_me from './Component/About_me';  
import Skills from './Component/Skills';      
import Experience from './Component/Experience'; 
import Projects from './Component/Projects';    

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Header /> <About_me /> </>
    },
    {
      path: "/Skills",
      element: <> <Header /> <Skills /> </>
    },
    {
      path: "/Experience",
      element: <> <Header /> <Experience /> </>
    },
    {
      path: "/Projects",
      element: <> <Header /> <Projects /> </>
    }
  ]);

  return (
    <div className='cutomcontainer'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;