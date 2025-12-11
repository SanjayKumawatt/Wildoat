import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import WebDevelopment from './Components/WebDevelopment'
import MobileAppDevelopment from './Components/MobileAppDevelopment'
import UiUxDesign from './Pages/UiUxDesign'
import SoftwareDevelopment from './Pages/SoftwareDevelopment'
import DatingAppDevelopment from './Pages/DatingAppDevelopment'
import AiCharacterDating from './Pages/AiCharacterDating'
import DataAnalysis from './Pages/DataAnalysis'
import AiAutomation from './Pages/AiAutomation'
import CyberSecurity from './Pages/CyberSecurity'
import AdsManagement from './Pages/AdsManagement'
import Contact from './Pages/Contact'
import About from './Pages/About'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/services/web-development",
          element:<WebDevelopment/>
        },
        {
          path:"/services/mobile-app-development",
          element:<MobileAppDevelopment/>
        },
        {
          path:"/services/ui-ux",
          element:<UiUxDesign/>
        },
        {
          path:"/services/software-development",
          element:<SoftwareDevelopment/>
        },
        // {
        //   path:"/services/dating-app-development",
        //   element:<DatingAppDevelopment/>
        // },
        // {
        //   path:"/services/ai-character-dating",
        //   element:<AiCharacterDating/>
        // },
        {
          path:"/services/data-analysis",
          element:<DataAnalysis/>
        },
        {
          path:"/services/ai-automation",
          element:<AiAutomation/>
        },
        {
          path:"/services/cyber-security",
          element:<CyberSecurity/>
        },
        {
          path:"/services/ads-management",
          element:<AdsManagement/>
        },
        {
          path:"/quote",
          element:<Contact/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/about",
          element:<About/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App