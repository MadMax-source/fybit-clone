'use client';
import Footer from '../shared/footer';
import Header from '../shared/header';
import { Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Withdrawal = ({ session }: { session: any }) => (
  <div>
    <h1 className="text-3xl font-bold text-yellow-500 mb-6">Withdraw Funds</h1>
    <p className="text-gray-300">
      Here you can withdraw your BTC, ETH, or USDT to an external wallet.
    </p>
  </div>
);

const DepositHistory = ({ session }: { session: any }) => (
  <div>
    <h1 className="text-3xl font-bold text-yellow-500 mb-6">Deposit History</h1>
    <p className="text-gray-300">Your previous deposits will appear here.</p>
  </div>
);

const WithdrawalHistory = ({ session }: { session: any }) => (
  <div>
    <h1 className="text-3xl font-bold text-yellow-500 mb-6">Withdrawal History</h1>
    <p className="text-gray-300">Your past withdrawals will appear here.</p>
  </div>
);

const OrdersHistory = ({ session }: { session: any }) => (
  <div>
    <h1 className="text-3xl font-bold text-yellow-500 mb-6">Order History</h1>
    <p className="text-gray-300">Your completed trade orders will appear here.</p>
  </div>
);

type Section = 'deposit' | 'withdrawal' | 'depositHistory' | 'withdrawalHistory' | 'orderHistory';

const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_KEY;

const Deposit = ({ session }: { session: any }) => {
  const [activeSection, setActiveSection] = useState<Section>('deposit');
  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);
  const [depositAddress, setDepositAddress] = useState<string>('');
  const [balances, setBalances] = useState({ btc: 0, eth: 0, usdt: 0 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [coin, setCoin] = useState('');
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.user?.email) return;
      const res = await fetch(`/api/user-details?email=${session.user.email}`);
      const data = await res.json();
      if (res.ok) setUserData(data.user);
    };
    fetchUser();
  }, [session]);

  useEffect(() => {
    if (!userData) return;

    const fetchBTCBalance = async (address: string) => {
      try {
        const res = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`);
        const data = await res.json();
        return data.balance / 1e8;
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
        return Number(data.result) / 1e18;
      } catch {
        return 0;
      }
    };

    const fetchUSDTBalance = async (address: string) => {
      try {
        const contract = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
        const res = await fetch(
          `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contract}&address=${address}&apikey=${ETHERSCAN_API_KEY}`,
        );
        const data = await res.json();
        return Number(data.result) / 1e6;
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
      setBalances({ btc, eth, usdt });
    };

    getBalances();
  }, [userData]);

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
      <div className="deposit-container flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="sidebar w-full md:w-1/4 p-6 border-r border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Available Balance</h3>
          <p>BTC: {balances.btc}</p>
          <p>ETH: {balances.eth}</p>
          <p>USDT: {balances.usdt}</p>

          <div className="border border-gray-500 my-4" />
          <h3 className="text-xl font-semibold mb-2">Deposit / Withdrawal</h3>
          <ul className="space-y-2">
            <li>
              <button
                className={`menu-item ${activeSection === 'deposit' ? 'active' : ''}`}
                onClick={() => setActiveSection('deposit')}
              >
                Deposit
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeSection === 'withdrawal' ? 'active' : ''}`}
                onClick={() => setActiveSection('withdrawal')}
              >
                Withdrawal
              </button>
            </li>
          </ul>

          <div className="border border-gray-500 my-4" />
          <h3 className="text-xl font-semibold mb-2">History</h3>
          <ul className="space-y-2">
            <li>
              <button
                className={`menu-item ${activeSection === 'depositHistory' ? 'active' : ''}`}
                onClick={() => setActiveSection('depositHistory')}
              >
                Deposit History
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeSection === 'withdrawalHistory' ? 'active' : ''}`}
                onClick={() => setActiveSection('withdrawalHistory')}
              >
                Withdrawal History
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeSection === 'orderHistory' ? 'active' : ''}`}
                onClick={() => setActiveSection('orderHistory')}
              >
                Order History
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="faq-content text-white px-6 py-10 flex-1">
          {activeSection === 'deposit' && (
            <>
              <h1 className="text-3xl font-bold text-yellow-500 mb-8">Cryptocurrency Deposit</h1>
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

              {selectedCoin && depositAddress ? (
                <div>
                  <label className="block text-lg font-medium mb-3">Address for Deposit</label>
                  <div className="flex flex-wrap items-center gap-6 border border-gray-700 rounded-lg p-6">
                    <QRCodeSVG value={depositAddress} size={150} />
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1">Address</p>
                      <div className="flex items-center rounded-lg p-3">
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
                    <p>FYBIT is not responsible for funds sent to another address or network.</p>
                    <p>
                      BTC deposits: <span className="text-yellow-500">1 confirmation</span>.
                      ETH/USDT: <span className="text-yellow-500">6 confirmations</span>.
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
            </>
          )}

          {activeSection === 'withdrawal' && <Withdrawal session={session} />}
          {activeSection === 'depositHistory' && <DepositHistory session={session} />}
          {activeSection === 'withdrawalHistory' && <WithdrawalHistory session={session} />}
          {activeSection === 'orderHistory' && <OrdersHistory session={session} />}
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Deposit;
