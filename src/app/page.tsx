import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-emerald-900 text-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <NavBar />
      <div className="grid grid-cols-2 gap-16 justify-items-center">
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        <p>Test</p>
        <p>Test</p>
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={512}
          height={256}
          priority
        />
        </div>

        <p> Test </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
