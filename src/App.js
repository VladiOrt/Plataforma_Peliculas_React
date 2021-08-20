import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './App.scss'
import { Header, Footer} from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return(
    <BrowserRouter>
      <Header></Header>
      <div className="main-container">              
        <Routes></Routes>       
      </div>
      <Footer></Footer>    
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  )
}

export default App;