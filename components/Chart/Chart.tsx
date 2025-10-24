'use client';

import Image from 'next/image';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { ArrowDown, ArrowUp, Star } from 'lucide-react';

const Chart = () => {
  return (
    <div className="text-white bg-[#1a1a1a] ">
      <Header />

      <main className=" bg-[#1a1a1a] mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-6 px-3">
        {/* Left / Chart Section */}
        <section className="lg:col-span-2 space-y-6">
          {/* Market Info */}
          <div className="flex flex-wrap items-center justify-between bg-slate-800/60 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Image alt="btc" width={24} height={24} src="/svg/bitcoin.svg" />
              <span className="font-semibold">Bitcoin (BTC) / USDT</span>
              <span className="ml-2 text-gray-400">▼</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span>
                24h Change:
                <span className="text-red-500 font-semibold"> 2,280 (2.11%)</span>
              </span>
              <span>
                24h High:
                <span className="text-green-500 font-semibold"> 111,290</span>
              </span>
              <span>
                24h Low:
                <span className="text-red-500 font-semibold"> 106,710</span>
              </span>
            </div>
          </div>

          {/* Chart Area */}
          <div className="border border-slate-700 rounded-lg bg-slate-800/40 p-4 relative">
            <div className="absolute top-4 right-4 opacity-20">
              <Image
                src="/images/FYBIT_white_horizontal.png"
                alt="logo watermark"
                width={120}
                height={40}
              />
            </div>
            <div className="h-[400px] flex items-center justify-center text-slate-400">
              {/* Chart goes here */}
              TradingView Chart Placeholder
            </div>
          </div>

          {/* Positions Table */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="flex gap-3 border-b border-slate-700 pb-2 mb-4 text-sm">
              {['Positions', 'Open Orders', 'Closed Positions', 'Realised PnL'].map((tab, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded ${
                    i === 0 ? 'bg-blue-600 text-white' : 'hover:bg-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-300 border-b border-slate-700">
                  {[
                    'Symbol',
                    'Amount',
                    'Leverage',
                    'Price',
                    'Loss Cut',
                    'Stop Loss Price',
                    'Sell (Limit)',
                    'Sell (Market)',
                    'Unrealised PnL (%)',
                  ].map((th) => (
                    <th key={th} className="py-2 text-left px-2">
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={11} className="text-center py-6 text-slate-500">
                    No positions yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mobile / Order Section */}
        <aside className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="flex justify-between items-center">
              <span className="text-sm">maxmad.mum@st.edu.ng</span>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-3">
              {['BTC', 'ETH', 'USDT'].map((tab, i) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 rounded ${
                    i === 2 ? 'bg-blue-600 text-white' : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div className="text-sm text-slate-400">
                <p>Balance: 0.00000 USDT</p>
                <p>Available: 0.00000 USDT</p>
              </div>

              <div className="flex justify-between text-xs text-slate-500">
                <span>Min: 5.00 USDT</span>
                <span>Max: 150,000.00 USDT</span>
              </div>

              {/* Order Type */}
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-slate-700 py-2 rounded hover:bg-slate-600"
                >
                  Limit
                </button>
                <button
                  type="button"
                  className="flex-1 bg-slate-700 py-2 rounded hover:bg-slate-600"
                >
                  Market
                </button>
              </div>

              {/* Amount Input */}
              <div className="flex items-center bg-slate-700 rounded overflow-hidden">
                <input
                  type="number"
                  placeholder="Enter amount"
                  disabled
                  className="flex-1 bg-transparent px-3 py-2 text-white outline-none disabled:opacity-50"
                />
                <div className="flex flex-col border-l border-slate-600">
                  <button type="button" className="p-1 hover:bg-slate-600">
                    <ArrowUp size={16} />
                  </button>
                  <button type="button" className="p-1 hover:bg-slate-600">
                    <ArrowDown size={16} />
                  </button>
                </div>
                <span className="px-3 text-slate-400 text-sm">USDT</span>
              </div>

              {/* Slider */}
              <input type="range" className="w-full accent-blue-600 disabled:opacity-50" disabled />
              <div className="flex justify-between text-xs text-slate-500">
                {['0%', '25%', '50%', '75%', '100%'].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>

              {/* Buy / Sell Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 py-3 rounded hover:bg-green-700">
                  Buy Order <span className="font-semibold block">UP</span>
                </button>
                <button className="flex-1 bg-red-600 py-3 rounded hover:bg-red-700">
                  Sell Order <span className="font-semibold block">DOWN</span>
                </button>
              </div>

              {/* Auto Sell */}
              <div>
                <h3 className="text-sm mb-2">Auto-Sell Setting:</h3>
                <div className="flex gap-2">
                  {['OFF', '100%', '200%', '300%'].map((label, i) => (
                    <button
                      key={label}
                      className={`flex-1 py-2 rounded ${
                        i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Pricing Section */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm mb-3">Pricing Sources</h4>
            <ul className="space-y-1 text-sm">
              {[
                ['Bitfinex', '110,110'],
                ['HTX', '109,985'],
                ['Binance', '109,980'],
                ['Coinbase', '110,045'],
                ['Bybit', '109,995'],
              ].map(([name, price]) => (
                <li key={name} className="flex justify-between">
                  <span>{name}</span>
                  <span>{price}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Chart;
