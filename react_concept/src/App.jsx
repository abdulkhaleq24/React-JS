
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Posts from './components/Posts'
import Header from './components/Header'
import Condition from './components/Condition'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/condition' element={<Condition/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
