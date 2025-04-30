import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router';
import Layout from './components/Layout';
import Portfolio, { loader as portfolioLoader, action as portfolioAction} from './Portfolio';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} > 
    <Route 
      index 
      element={<Portfolio />} 
      loader={portfolioLoader}
      action={portfolioAction}
    />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
