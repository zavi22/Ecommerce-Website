import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'
import ChatWidget from './components/ChatWidget'
import PrivacyPolicy from './pages/PrivacyPolicy'


const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  //   // What it does:

  // Runs ONCE when the app loads (empty dependency array [])
  // Sets a timer for 2000 milliseconds (2 seconds)
  // After 2 seconds: calls setIsLoading(false) to hide the loader
  // The cleanup function clearTimeout(timer) clears the timer if component unmounts

  return (
    <>
      {isLoading && <Loader />}

      {/* If isLoading is true → shows the <Loader /> component
      If isLoading is false → hides the loader, shows the rest of the app
      The && operator means "only render if the condition is true" */}

      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
      <ChatWidget />
    </>
  )
}

export default App
