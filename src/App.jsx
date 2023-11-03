import { useState } from 'react'
// import LogIn from './pages/logIn'
// import SignUp from './pages/signUp'
import Home from './pages/home'
import SignUp from './pages/signUp'
import LogIn from './pages/logIn'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
    </>

  )
}

export default App
