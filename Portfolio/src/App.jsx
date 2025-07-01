import React from 'react';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About_me from './Component/About_me';  
import Skills from './Component/Skills';      
import Experience from './Component/Experience'; 
import Projects from './Component/Projects';
import Education from './Component/Education';
import Footer from './Component/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Header /> <About_me /> <Footer /> </>
    },
    {
      path: "/Skills",
      element: <> <Header /> <Skills /> <Footer /> </>
    },
    {
      path: "/Experience",
      element: <> <Header /> <Experience /> <Footer /> </>
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