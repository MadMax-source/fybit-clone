'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminNav } from '@/components/AdminNav';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function AdminSettingsPage() {
  const router = useRouter();
  const [platformFee, setPlatformFee] = useState('0.05');
  const [maxLeverage, setMaxLeverage] = useState('100');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [allowNewRegistrations, setAllowNewRegistrations] = useState(true);
  const [minWithdrawal, setMinWithdrawal] = useState('10');
  const [withdrawalFee, setWithdrawalFee] = useState('2.5');

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    if (!admin) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Platform Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Configure platform parameters and features</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trading Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Platform Fee (%)
                </label>
                <Input
                  type="number"
                  value={platformFee}
                  onChange={(e) => setPlatformFee(e.target.value)}
                  step="0.01"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Fee charged on each trade
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Maximum Leverage
                </label>
                <Input
                  type="number"
                  value={maxLeverage}
                  onChange={(e) => setMaxLeverage(e.target.value)}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Maximum leverage allowed for trades
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum Withdrawal (USDT)
                </label>
                <Input
                  type="number"
                  value={minWithdrawal}
                  onChange={(e) => setMinWithdrawal(e.target.value)}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Minimum amount users can withdraw
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Withdrawal Fee (USDT)
                </label>
                <Input
                  type="number"
                  value={withdrawalFee}
                  onChange={(e) => setWithdrawalFee(e.target.value)}
                  step="0.1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Fixed fee for withdrawals
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Platform Control</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Maintenance Mode</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Disable trading temporarily</p>
                </div>
                <button
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    maintenanceMode ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">New Registrations</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Allow new users to sign up</p>
                </div>
                <button
                  onClick={() => setAllowNewRegistrations(!allowNewRegistrations)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    allowNewRegistrations ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      allowNewRegistrations ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400 mb-1">
                  Warning
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-500">
                  Changes to platform settings will affect all users immediately. Please review carefully before saving.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trading Pairs</h2>
            <div className="space-y-3">
              {[
                { pair: 'BTC/USDT', enabled: true, minSize: '10' },
                { pair: 'ETH/USDT', enabled: true, minSize: '10' },
                { pair: 'SOL/USDT', enabled: true, minSize: '5' },
                { pair: 'BNB/USDT', enabled: false, minSize: '10' },
                { pair: 'XRP/USDT', enabled: false, minSize: '5' },
              ].map((pair) => (
                <div key={pair.pair} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{pair.pair}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Min size: ${pair.minSize}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    pair.enabled
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {pair.enabled ? 'Active' : 'Disabled'}
                  </span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Manage Trading Pairs</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Server Status</span>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Database</span>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Connected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Price Feed</span>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Trading Engine</span>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Running
                </span>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Server Load</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Memory Usage</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">62%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveSettings} className="px-8">
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
