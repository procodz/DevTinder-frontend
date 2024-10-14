import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
    <Footer />
      
    </>
  )
}

export default App
