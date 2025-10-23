import Link from 'next/link';
import Footer from '../shared/footer';
import Header from '../shared/header';
import Image from 'next/image';
import { Copy } from 'lucide-react';

const Deposit = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="deposit-container">
        <aside className="sidebar desktop-menu">
          <h3 className="text-xl font-semibold">Available Balance</h3>
          <p>BTC: 0</p>
          <p>ETH: 0</p>
          <p>USDT: 0</p>
          <nav>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">Deposit / Withdrawal</h3>
            <ul>
              <li>
                <Link className="menu-item active" href="/Account/Deposit">
                  <span className="text-gray-200 font-normal">Deposite</span>
                </Link>
              </li>
              <li>
                <Link className="menu-item " href="/Account/Withdrawal">
                  <span className="text-gray-200 font-normal">Withdrawal</span>
                </Link>
              </li>
            </ul>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">History</h3>
            <ul>
              <li>
                <Link className="menu-item" href="/Account/DepositHistory">
                  <span className="text-gray-200 font-normal">Deposit History</span>
                </Link>
              </li>

              <li>
                <Link className="menu-item" href="/Account/WithdrawalHistory">
                  <span className="text-gray-200 font-normal">Withdrawal History</span>
                </Link>
              </li>

              <li>
                <Link className="menu-item" href="/Account/OrdersHistory">
                  <span className="text-gray-200 font-normal">Order History</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <aside className="faq-menu mobile-menu">
          <nav>
            <ul>
              <li>
                <Link href="/Account/Deposit" className="menu-item active">
                  Deposit
                </Link>
              </li>
              <li>
                <Link href="/Account/Withdrawal" className="menu-item active">
                  Withdrawal
                </Link>
              </li>
              <li>
                <Link href="/Account/DepositHistory" className="menu-item active">
                  Deposit History
                </Link>
              </li>
              <li>
                <Link href="/Account/WithdrawalHistory" className="menu-item active">
                  Withdrawal History
                </Link>
              </li>
              <li>
                <Link href="/Account/OrdersHistory" className="menu-item active">
                  Order History
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="faq-content text-white px-6 py-10">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8">Cryptocurrency Deposit</h1>

          {/* Select Coin */}
          <div className="mb-10">
            <label className="block text-lg font-medium mb-2">Select Coin</label>

            <div className="relative max-w-xl">
              <select
                className="w-full  text-gray-200 border border-gray-700 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Search coin
                </option>
                <option>BTC (Bitcoin)</option>
                <option>ETH (ERC20)</option>
                <option>USDT (ERC20)</option>
              </select>
              <svg
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Coin List */}
          <div className="flex flex-wrap gap-6 mb-12">
            {[
              { name: 'BTC', icon: '/svg/bitcoin.svg' },
              { name: 'ETH', icon: '/svg/ethereum.svg' },
              { name: 'USDT', icon: '/svg/usdt.svg' },
            ].map((coin) => (
              <div
                key={coin.name}
                className="flex flex-col items-center justify-center  hover:bg-gray-600 transition-colors rounded-xl p-4 cursor-pointer w-24 border border-gray-500"
              >
                <Image src={coin.icon} alt={coin.name} width={40} height={40} />
                <span className="mt-2 text-sm font-semibold">{coin.name}</span>
              </div>
            ))}
          </div>

          {/* Hidden Deposit Section */}
          <div className="hidden">
            <label className="block text-lg font-medium mb-3">Address for Deposit</label>

            <div className="flex flex-wrap items-center gap-6 bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex-shrink-0">
                <Image src="/images/qr-code.png" alt="QR Code" width={150} height={150} />
              </div>

              <div className="flex-1">
                <p className="text-gray-400 mb-1">Address</p>
                <div className="flex items-center bg-gray-800 rounded-lg p-3">
                  <p className="text-sm break-all mr-3">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                  <button className="p-2 hover:bg-gray-700 rounded-md transition">
                    <Copy className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-gray-400 space-y-2 text-sm max-w-3xl">
              <p>
                FYBIT is not responsible for funds that have been sent to another address or
                network. They will be lost forever.
              </p>
              <p>FYBIT deposit addresses are fixed multi-signature cold wallet addresses.</p>
              <p>
                Bitcoin deposits are credited after{' '}
                <span className="text-yellow-500">1 confirmation</span>. Ethereum and USDT deposits
                are credited after <span className="text-yellow-500">6 confirmations</span>.
                Usually, this takes from 5 to 30 minutes, depending on the network speed.
              </p>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Deposit;
