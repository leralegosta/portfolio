import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-first text-emerald-900">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <NavBar />
      <div className="grid grid-cols-2 gap-8 justify-items-center">
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={1024}
          height={512}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={1024}
          height={512}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={1024}
          height={512}
          priority
        />
        <Image
          className="placeholder"
          src="/placeholder.png"
          alt="placeholder"
          width={1024}
          height={512}
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
