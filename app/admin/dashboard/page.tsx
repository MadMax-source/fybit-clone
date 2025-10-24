'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminNav } from '@/components/AdminNav';
import { Card } from '@/components/Card';

export default function AdminDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    if (!admin) {
      router.push('/admin/login');
    }
  }, [router]);

  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12%', trend: 'up' },
    { label: 'Active Trades', value: '3,421', change: '+8%', trend: 'up' },
    { label: 'Total Volume (24h)', value: '$45.2M', change: '+23%', trend: 'up' },
    { label: 'Pending KYC', value: '89', change: '-5%', trend: 'down' },
  ];

  const recentActivities = [
    {
      time: '2 min ago',
      user: 'user@example.com',
      action: 'Opened BTC/USDT position',
      amount: '$5,000',
    },
    {
      time: '5 min ago',
      user: 'trader@example.com',
      action: 'Closed ETH/USDT position',
      amount: '$3,200',
    },
    { time: '12 min ago', user: 'demo@example.com', action: 'Deposited USDT', amount: '$10,000' },
    { time: '18 min ago', user: 'pro@example.com', action: 'Withdrew BTC', amount: '0.5 BTC' },
    {
      time: '25 min ago',
      user: 'newuser@example.com',
      action: 'Completed KYC verification',
      amount: '-',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Welcome back, monitor your platform performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  <span>{stat.change}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        stat.trend === 'up'
                          ? 'M5 10l7-7m0 0l7 7m-7-7v18'
                          : 'M19 14l-7 7m0 0l-7-7m7 7V3'
                      }
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Trading Volume
            </h2>
            <div className="h-64 flex items-end justify-around space-x-2">
              {[45, 62, 58, 71, 65, 78, 92].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors cursor-pointer"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              User Distribution
            </h2>
            <div className="flex items-center justify-center h-64">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="20" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="20"
                    strokeDasharray="188.4 62.8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="20"
                    strokeDasharray="62.8 188.4"
                    strokeDashoffset="-188.4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">12.5K</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Total</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Verified (75%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Pending (25%)</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    User
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Action
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-400">
                      {activity.time}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-900 dark:text-white">
                      {activity.user}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-700 dark:text-slate-300">
                      {activity.action}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-slate-900 dark:text-white">
                      {activity.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
