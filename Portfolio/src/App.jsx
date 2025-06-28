import React from 'react';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About_me from './Component/About_me';  
import Skills from './Component/Skills';      
import Experience from './Component/Experience'; 
import Projects from './Component/Projects';
import Education from './Component/Education';

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
    },
    {
      path: "/Education",
      element: <> <Header /> <Education /> </>
    }
  ]);

  return (
    <div className='cutomcontainer'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;