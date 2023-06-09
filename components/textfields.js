import Link from 'next/link'

export default function TextFields() {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-auto bg-green-200 p-4 rounded-lg flex items-center h-full mb-4 sm:mb-0">
          <span className="text-6xl mr-2">💸</span>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-green-800">Cash Back Earned</h3>
            <p className="text-2xl font-bold">$45,000</p>
          </div>
        </div>
        <div className="w-full sm:w-auto bg-yellow-200 p-4 rounded-lg flex items-center justify-center h-full mb-4 sm:mb-0">
          <span className="text-6xl mr-2">😃</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-800">150+ Signups</h3>
            <p className="text-2xl font-bold">and counting...</p>
          </div>
        </div>
        <div className="w-full sm:w-auto bg-blue-200 p-4 rounded-lg flex items-center h-full mb-4 sm:mb-0">
          <span className="text-6xl mr-2">♻️</span>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-blue-800">We help you reclaim</h3>
            <p className="text-2xl font-bold">up to 50% of your exchange trading fees!</p>
          </div>
        </div>
        <div className="w-full sm:w-auto bg-purple-200 p-4 rounded-lg flex items-center h-full">
          <img src="/telegram-logo.png" alt="Telegram Logo" className="w-12 h-12 mr-2" />
          <div className="flex-grow">
            <Link href="https://t.me/+wsCXO1cIGG4xYWUy">
                <span className="text-2xl font-bold text-purple-800">Join our Telegram</span>
            </Link>
          </div>
        </div>
      </div>


    );
  }
  