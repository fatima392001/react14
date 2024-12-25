import React from 'react'
import Navbar from './assets/components/Navbar'
import About from './assets/components/About'
import Header from './assets/components/Header'
import Portfolio from './assets/components/Portfolio'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

export default function App() {
  return (
    <>
      <h1 style={{ color: "blue" }}>Test Message</h1>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}  