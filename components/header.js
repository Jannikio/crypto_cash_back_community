import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="flex items-center space-x-2">
        <span className="text-4xl">💸</span>
        <span className="text-xl font-bold text-gray-500">Crypto Cash Back Community</span>
      </div>
      <nav className="space-x-10 ml-20 lg:ml-64 xl:ml-96">
        <Link href="#start-saving" className="text-gray-500 font-bold">Start Saving</Link>
        <Link href="#how-it-works" className="text-gray-500 font-bold">How it Works</Link>
      </nav>
      <div>
        <span className="text-sm text-gray-400">Empowered by DefiChain</span>
      </div>
    </header>
  );
}

