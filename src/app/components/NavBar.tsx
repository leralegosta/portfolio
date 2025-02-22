import React from 'react';
import Link from "next/link";


function Navbar() {
  return (
  <div className="h-12 text-xl fixed top-0 inset-x-0 flex items-center justify-between px-4 bg-rose-400 text-emerald-900">
  <span className="font-bold">Test</span>
  <nav className="flex gap-4">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="/store" className="hover:underline">Store</Link>
  </nav>
</div>
  )
}

export default Navbar