'use client';
import Link from 'next/link';
import Footer from '../shared/footer';
import Header from '../shared/header';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

type Section = 'deposit' | 'withdrawal' | 'depositHistory' | 'withdrawalHistory' | 'orderHistory';

const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_KEY;

const Deposit = ({ session }: { session: any }) => {
  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);
  const [depositAddress, setDepositAddress] = useState<string>('');
  const [balances, setBalances] = useState({ btc: 0, eth: 0, usdt: 0 });

  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.user?.email) return;

      console.log('Session data:', session);

      if (!session?.user?.email) {
        console.warn('⚠️ No session email found');
        return;
      }

      const email = session.user.email;
      console.log('🧾 Fetching user details for email:', email);

      try {
        const res = await fetch(`/api/user-details?email=${email}`);
        const data = await res.json();

        console.log('Fetched user details:', data);

        if (res.ok) {
          setUserData(data.user);

          // 🪙 Log crypto addresses
          console.log('🔹 ETH Address:', data.user?.ethAddress || 'N/A');
          console.log('🔹 BTC Address:', data.user?.btcAddress || 'N/A');
          console.log('🔹 USDT Address:', data.user?.usdtAddress || 'N/A');
        } else {
          console.warn('⚠️ Failed to fetch user details:', data?.message || 'Unknown error');
        }
      } catch (err) {
        console.error('❌ Failed to fetch user details:', err);
      }
    };

    fetchUser();
  }, [session]);

  // ✅ Fetch balances when userData loads
  useEffect(() => {
    if (!userData) return;

    const fetchBTCBalance = async (address: string) => {
      try {
        const res = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`);
        const data = await res.json();
        return data.balance / 1e8; // satoshis → BTC
      } catch {
        return 0;
      }
    };

    const fetchETHBalance = async (address: string) => {
      try {
        const res = await fetch(
          `https://api.etherscan.io/api?module=account&action=balance&address=${address}&apikey=${ETHERSCAN_API_KEY}`,
        );
        const data = await res.json();
        return Number(data.result) / 1e18; // wei → ETH
      } catch {
        return 0;
      }
    };

    const fetchUSDTBalance = async (address: string) => {
      try {
        const contract = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // mainnet USDT
        const res = await fetch(
          `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contract}&address=${address}&apikey=${ETHERSCAN_API_KEY}`,
        );
        const data = await res.json();
        return Number(data.result) / 1e6; // 6 decimals
      } catch {
        return 0;
      }
    };

    const getBalances = async () => {
      const [btc, eth, usdt] = await Promise.all([
        userData.btcAddress ? fetchBTCBalance(userData.btcAddress) : 0,
        userData.ethAddress ? fetchETHBalance(userData.ethAddress) : 0,
        userData.usdtAddress ? fetchUSDTBalance(userData.usdtAddress) : 0,
      ]);

      console.log('💰 Balances:', { btc, eth, usdt });
      setBalances({ btc, eth, usdt });
    };

    getBalances();
  }, [userData]);

  // ✅ Fetch user details once we have session.email
  // ✅ Update deposit address dynamically
  useEffect(() => {
    if (!userData) return;
    if (selectedCoin === 'BTC') setDepositAddress(userData.btcAddress || '');
    if (selectedCoin === 'ETH') setDepositAddress(userData.ethAddress || '');
    if (selectedCoin === 'USDT') setDepositAddress(userData.usdtAddress || '');
  }, [selectedCoin, userData]);

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
  };

  return (
    <div>
      <Header session={session} />
      <div className="deposit-container">
        {/* Sidebar Menu */}
        <aside className="sidebar desktop-menu">
          <h3 className="text-xl font-semibold">Available Balance</h3>
          <p>BTC: {balances.btc}</p>
          <p>ETH: {balances.eth}</p>
          <p>USDT: {balances.usdt}</p>
          <nav>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">Deposit / Withdrawal</h3>
            <ul>
              <li>
                <Link className="menu-item active" href="/Account/Deposit">
                  Deposit
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/Account/Withdrawal">
                  Withdrawal
                </Link>
              </li>
            </ul>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">History</h3>
            <ul>
              <li>
                <Link className="menu-item" href="/Account/DepositHistory">
                  Deposit History
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/Account/WithdrawalHistory">
                  Withdrawal History
                </Link>
              </li>
              <li>
                <Link className="menu-item" href="/Account/OrdersHistory">
                  Order History
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="faq-content text-white px-6 py-10">
          <h1 className="text-3xl font-bold text-yellow-500 mb-8">Cryptocurrency Deposit</h1>

          {/* Select Coin */}
          <div className="mb-10">
            <label className="block text-lg font-medium mb-2">Select Coin</label>
            <div className="relative max-w-xl">
              <select
                className="w-full text-gray-200 border border-gray-700 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
              >
                <option value="">Search coin</option>
                <option value="BTC">BTC (Bitcoin)</option>
                <option value="ETH">ETH (ERC20)</option>
                <option value="USDT">USDT (ERC20)</option>
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

          {/* Deposit Details */}
          {selectedCoin && depositAddress ? (
            <div>
              <label className="block text-lg font-medium mb-3">Address for Deposit</label>

              <div className="flex flex-wrap items-center gap-6  border border-gray-700 rounded-lg p-6">
                <div className="flex-shrink-0">
                  <QRCodeSVG value={depositAddress} size={150} />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 mb-1">Address</p>
                  <div className="flex items-center  rounded-lg p-3">
                    <p className="text-sm break-all mr-3">{depositAddress}</p>
                    <button
                      className="p-2 hover:bg-gray-700 rounded-md transition"
                      onClick={handleCopy}
                    >
                      <Copy className="w-5 h-5 text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-400 space-y-2 text-sm max-w-3xl">
                <p>
                  FYBIT is not responsible for funds sent to another address or network. They will
                  be lost forever.
                </p>
                <p>
                  Bitcoin deposits are credited after{' '}
                  <span className="text-yellow-500">1 confirmation</span>. Ethereum and USDT after{' '}
                  <span className="text-yellow-500">6 confirmations</span>. Usually takes 5–30
                  minutes.
                </p>
              </div>
            </div>
          ) : selectedCoin ? (
            <p className="text-gray-400">
              No address found for {selectedCoin}. Please contact support.
            </p>
          ) : (
            <p className="text-gray-500">Select a coin to view deposit address.</p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Deposit;
