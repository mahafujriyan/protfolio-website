import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import ProjectsDetails from './Components/Projects/ProjectsDetails.jsx';
 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
   
  },
   {
        path: 'projects/:id',
        element: <ProjectsDetails />, 
      },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
