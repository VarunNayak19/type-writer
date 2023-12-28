
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Type from './components/type/type'
import Match from './components/match/match'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Type />} />
      <Route path='/result' element={<Match />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
