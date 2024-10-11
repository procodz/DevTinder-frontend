import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Login from './Login'
import Body from './Body'
import Profile from './Profile'

function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<Body/>}>
          <Route path="login" element={<Login/>} />
          <Route path="profile" element={<Profile/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    <h1 className="text-3xl font-bold ">DevTinder front end</h1>
    <Footer />
      
    </>
  )
}

export default App
