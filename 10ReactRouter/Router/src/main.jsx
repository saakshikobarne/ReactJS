import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'

// import Home from './components/home/home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'

// import {Home } from './components/index.js'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import Home from './components/home/home.jsx'

import components from './components';
import { githubInfoLoader } from './components/Github/Github.jsx'


// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <components.Home/>
//       },
//       {
//         path: "about",
//         element: <components.About/>
//       },
//       {
//         path: "contact",
//         element: <components.Contact/>
//       }
//     ]
//   }
// ]);

//The same code as above can also be written as:


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<components.Home/>}></Route>
      <Route path='about' element={<components.About/>}></Route>
      <Route path='contact' element={<components.Contact/>}></Route>
      <Route path='user/:userid' element={<components.User/>}></Route>
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<components.Github/>}>
      </Route>
    </Route>  
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
