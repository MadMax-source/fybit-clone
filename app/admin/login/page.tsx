'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Card } from '@/components/Card';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) throw new Error('Please enter both email and password.');

      if (email === 'admin@fybit.com' && password === 'admin123') {
        localStorage.setItem('admin', JSON.stringify({ email, role: 'admin' }));
        router.push('/admin');
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4">
      <Card className="w-full max-w-md bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl shadow-lg shadow-black/40 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="  rounded-2xl flex items-center justify-center mx-auto mb-5 ">
            <Image src="/images/FYBIT_black_horizontal.png" width={100} height={100} alt="logo" />
          </div>

          <h1 className="text-3xl font-bold text-gray-500 mb-2">Admin Portal</h1>
          <p className="text-[#9ca3af] text-sm">
            Sign in to access your <span className="text-blue-400 font-medium">Fybit Admin</span>{' '}
            dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Admin Email</label>
            <input
              type="email"
              placeholder="admin@fybit.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#111] text-white placeholder-gray-500 border border-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] text-white placeholder-gray-500 border border-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md shadow-blue-600/30"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        {/* Footer note */}
        <div className="mt-8 p-4 bg-[#111] border border-[#2a2a2a] rounded-lg text-center">
          <p className="text-xs text-gray-500">
            Demo credentials: <span className="text-blue-400">admin@fybit.com</span> /{' '}
            <span className="text-blue-400">admin123</span>
          </p>
        </div>
      </Card>
    </div>
  );
}
