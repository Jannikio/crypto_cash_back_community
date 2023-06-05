import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <span className="text-4xl">💸</span>
        <span className="text-xl font-bold text-gray-500">Crypto Cash Back Community</span>
      </div>
      <nav className="space-x-4 sm:space-x-10">
        <Link href="#start-saving" className="text-gray-500 font-bold">Start Saving</Link>
        <Link href="#how-it-works" className="text-gray-500 font-bold">How it Works</Link>
        <a href="https://t.me/+wsCXO1cIGG4xYWUy" className="text-blue-500 font-bold" target="_blank" rel="noopener noreferrer">Join our Telegram</a>
      </nav>
      <div className="flex items-center">
        <Image src="/defichain.png" alt="logo" width={20} height={20}/>
        <span className="text-sm text-gray-400 ml-2 hidden sm:block">Empowered by DefiChain</span>
      </div>
    </header>

  );
}

