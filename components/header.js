import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <span className="text-4xl">💸</span>
        <span className="text-xl font-bold text-gray-500">Crypto Cash Back Community</span>
      </div>
        <nav className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-4 sm:space-y-0">
          <Link href="#start-saving" className="text-gray-500 font-bold">Start Saving</Link>
          <Link href="#how-it-works" className="text-gray-500 font-bold">How it Works</Link>
          <a href="https://t.me/+wsCXO1cIGG4xYWUy" className="text-blue-500 font-bold" target="_blank" rel="noopener noreferrer">
            <span className="hidden sm:inline">Join our Telegram</span>
          </a>
        </nav>
        <div className="flex sm:hidden items-center space-x-2">
          <a href="https://t.me/+wsCXO1cIGG4xYWUy" className="flex items-center" target="_blank" rel="noopener noreferrer">
            <Image src="/telegram-logo.png" alt="Telegram logo" width={20} height={20}/>
          </a>
          <Image src="/defichain.png" alt="logo" width={20} height={20}/>
        </div>
        <div className="flex items-center sm-flex">
          <Image src="/defichain.png" alt="logo" width={20} height={20} className="hidden sm:block"/>
          <span className="text-sm text-gray-400 ml-2 hidden sm:block">Empowered by DefiChain</span>
        </div>
    </header>

  );
}

