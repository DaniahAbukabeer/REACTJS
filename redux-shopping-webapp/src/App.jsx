import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'
import HomePage from './components/HomePage'


function App() {
  //const [count, setCount] = useState(0)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/products' element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route index element={<HomePage/>}></Route>
    </Route>
  ))
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
