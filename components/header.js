import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="flex items-center space-x-2">
        <span className="text-4xl">💸</span>
        <span className="text-xl font-bold text-gray-500">Crypto Cash Back Community</span>
      </div>
      <nav style={{ marginLeft: '500px' }} className="space-x-10">
        <Link href="#buttons" className="text-gray-500 font-bold no-underline">Start Saving</Link>
        <Link href="#text1" className="text-gray-500 font-bold no-underline">How it Works</Link>
      </nav>
      <div></div>
    </header>
  );
}
