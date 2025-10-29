'use client';
import React, { useState } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { Eye, Key, Mail } from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import { signIn, signInSocial } from '@/lib/actions/auth-actions';

const Login = ({ session }: { session: any }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSocialAuth = async (provider: 'google') => {
    setLoading(true);
    setMessage('');

    try {
      await signInSocial(provider);
    } catch (err) {
      setMessage(
        `Error authenticating with ${provider}: ${
          err instanceof Error ? err.message : 'Unknown error'
        }`,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('⚠️ Please enter both email and password.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const result = await signIn(email, password);
      if (result?.user) {
        setMessage('🎉 Login successful! Redirecting...');
        setTimeout(() => router.push('/'), 1500);
      } else {
        setMessage('❌ Invalid credentials.');
      }
    } catch (error) {
      console.error(error);
      setMessage('⚠️ Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /*


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setMessage('🎉 Congratulations! You have logged in.');
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      setMessage('⚠️ Please enter both email and password.');
    }
  };

  */

  return (
    <div>
      <div>
        <Header session={session} />
      </div>
      <div className="container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="account-details">
            <h2>Log In</h2>
            <p className="subtitle">Please check that you are visiting the correct URL:</p>
            <div className="secure-url">
              <span className="lock-icon">🔒</span>
              <Link href="https://www.fybit.app" target="_blank">
                <span className="scheme">https://</span>
                <span className="text-gray-200">fybit.app</span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => handleSocialAuth('google')}
              disabled={loading}
              className="flex w-full items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <FcGoogle size={20} /> Google
            </button>

            <label>Email</label>
            <div className="icon-wrapper">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
                placeholder="@mail.com"
                autoComplete="on"
              />
              <span className="input-icon">
                <Mail />
              </span>
            </div>

            <label>Password</label>
            <div className="password-wrapper">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
                placeholder="Enter your password"
                type="password"
                autoComplete="off"
              />
              <span className="toggle-password">
                <Eye />
              </span>
            </div>

            <label>Google 2FA (if enabled)</label>
            <div className="icon-wrapper">
              <input
                className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
                placeholder="Google authenticator 6 Digits"
                autoComplete="off"
              />
              <span className="input-icon">
                <Key />
              </span>
            </div>

            <label className="">
              <input type="checkbox" className="mr-2" />
              <span>Keep me signed in on this computer</span>
            </label>

            <input type="hidden" />
            <button className="change-button" type="submit">
              {loading ? 'Loggin in...' : 'Log In'}
            </button>

            {message && <p className="text-center mt-3 font-semibold text-yellow-500">{message}</p>}

            <p className="forgot-link text-yellow-500 hover:text-yellow-600">
              <Link href="/Account/ForgotPassword">
                <span className="forgot-link">Forgot your password?</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
