import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="h-12 text-xl fixed top-0 inset-x-0 flex items-center justify-between px-4 bg-third text-emerald-900 border-b-8 border-fourth">
      <span className="flex items-center gap-2 font-bold">
        <Image
          src="/placeholder.png"
          alt="placeholder"
          width={24}
          height={24}
        />
        Test
      </span>

      {/* Navigation Links */}
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline hover:text-rose-600 transition-colors duration-200">Home</Link>
        <Link href="/about" className="hover:underline hover:text-rose-600 transition-colors duration-200">About</Link>
        <Link href="/store" className="hover:underline hover:text-rose-600 transition-colors duration-200">Store</Link>
      </nav>
    </div>
  );
}

export default Navbar;
