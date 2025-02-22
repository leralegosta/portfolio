import React from 'react'
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";


function Store() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-emerald-900 text-gray-50">
        <NavBar />
      <h1>
        Store page
        </h1>
        <Footer />
    </div>
  )
}

export default Store