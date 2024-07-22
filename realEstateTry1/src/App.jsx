import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import RootLayout from './shared/components/RootLayout/RootLayout';
import HomePage from './screens/home/HomePage';
import Rent from './screens/Rent/Rent';
import Buy from './screens/Buy/Buy';



function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}> 
    <Route index element={<HomePage/>}></Route>
    <Route path='/buy' element={<Buy/>}></Route>
    <Route path='/rent' element={<Rent/>}></Route>
    </Route>
  
  ))
  return (
    <div className='App'>
   
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
