import React from 'react';
import Link from "next/link";
import Image from "next/image";



function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 w-full h-12 flex items-center justify-center bg-rose-400 text-emerald-900 text-sm">
  <a
    className="flex items-center gap-2 hover:underline"
    href="https://nextjs.org/learn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/placeholder.png"
      alt="placeholder"
      width={16}
      height={16}
      priority
    />
    Test
  </a>
</footer>
  )
}

export default Footer