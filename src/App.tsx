import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import './App.css'
import Home from './home'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>

        </Routes>
      </BrowserRouter>
    
  )
}

export default App
