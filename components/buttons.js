import Link from 'next/link';

export default function Buttons() {
  return (
    <section className="p-6 text-gray-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">🎉 Get up to 50% of your trading fees back 🎉</h2>
        <p className="mt-2">Use one of our referral-codes below to get up to 50% of your trading fees back. We forward 100% of the collected trading fees back to you. Completely free 🙌</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-md">
          <Link className="block text-lg font-bold text-center text-blue-500 mb-2 p-2 border rounded" href="https://www.kucoin.com/r/rf/QBSAP747">
            kucoin.com
          </Link>
          <ul className="list-disc pl-5">
            <li>Sign-in within 3 days</li>
            <li>Deposit min. 20$</li>
            <li>Claim your reward</li>
          </ul>
        </div>

        <div className="border p-4 rounded-md">
          <Link className= "block text-lg font-bold text-center text-blue-500 mb-2 p-2 border rounded" href="https://accounts.binance.com/en/register?ref=WNK5IQ29">
            binance.com
          </Link>
          <ul className="list-disc pl-5">
            <li>Sign-in within 3 days</li>
            <li>Deposit min. 20$</li>
            <li>Claim your reward</li>
          </ul>
        </div>

        <div className="border p-4 rounded-md">
          <Link className="block text-lg font-bold text-center text-blue-500 mb-2 p-2 border rounded" href="https://www.okx.com/join/59916186">
            okx.com
          </Link>
          <ul className="list-disc pl-5">
            <li>Download OKX app</li>
            <li>Deposit min. 20$</li>
            <li>Claim your reward</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
