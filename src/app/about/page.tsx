import React from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-first text-emerald-900 flex flex-col items-center justify-center px-8 sm:px-20 pt-20">
      <NavBar />

      <main className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-gray-900 mt-12">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Me</h1>
        <p className="text-center mb-6">
          Feel free to reach out with any questions or feedback!
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-semibold">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none resize-none"
            />
          </label>

          <button 
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold transition hover:bg-rose-600 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default About;
