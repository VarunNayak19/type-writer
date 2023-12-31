
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Type from './components/type/type'
import Match from './components/match/match'
import LandingPage from './components/landing-page/landing-page';
import TypingTest from './components/typing-mobile/typing-mobile';

function App() {
//   const isWindows = navigator.userAgent.includes('Windows');
// const isMac = navigator.userAgent.includes('Macintosh');
// const isIphone = navigator.userAgent.includes('iPhone');
// alert(navigator.userAgent);
//  if (isMac) {
//   alert('Mac');
// } else if(isWindows){
//   alert('Windows');
// }
// else if(isIphone){
//   alert('Iphone');
// }
// else {
//   alert('not found');
// }
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} />
      <Route path='/type' element={<Type />} />
      <Route path='/result' element={<Match />} />
      <Route path='/typeMobile' element={<TypingTest />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
