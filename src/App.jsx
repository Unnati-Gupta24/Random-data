import React from 'react'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Cards.jsx'

function App () {
  return (
    <>
      <Navbar/>
      <main class="main">This is main content</main>
      <Cards/>
      <main class="main">Sale! Sale! Sale!</main>
      <Cards/>
      <Cards/>
      <main class="main">Thank you for the purchase.</main>
      <main class="main">We hope you liked it.</main>
      <main class="main">you</main>
      <Footer/>
    </>
  )
}

export default App

