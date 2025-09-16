import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './Landing_Page/Home/HomePage.jsx'
import Signup from './Landing_Page/Signup/Signup.jsx'
import About from './Landing_Page/About/AboutPage.jsx'
import Navbar from './Landing_Page/Navbar.jsx'
import Footer from './Landing_Page/Footer.jsx'
import NotFound from './Landing_Page/NotFound.jsx'
import ProductPage from './Landing_Page/Products/ProductPage.jsx'
import PricingPage from './Landing_Page/Pricing/PricingPage.jsx'
import SupportPage from './Landing_Page/Support/SupportPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
