'use client';
import React, { useState } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/actions/auth-actions';
import { createWallets } from '@/lib/actions/wallet-action';

const Register = ({ session }: { session: any }) => {
  const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!fullname || !email || !password || !confirmPassword) {
      setMessage('⚠️ Please fill all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('⚠️ Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      const result = await signUp(email, password, fullname);

      if (result?.user) {
        await createWallets(email, fullname);
        setMessage('🎉 Registration successful! Redirecting to login...');
        setTimeout(() => {
          router.push('/Account/Login');
        }, 2000);
      } else {
        setMessage('⚠️ Failed to register. Please try again.');
      }
    } catch (error: any) {
      setMessage(`❌ ${error.message || 'Error creating account.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Header session={session} />
      </div>
      <div className="account-details">
        <h2>Sign Up</h2>
        <p className="note">
          To complete registration, you need to click on the confirmation link that was sent to the
          email.
        </p>
        <form onSubmit={handleRegister}>
          <label>Full name</label>
          <input
            className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Email</label>
          <input
            className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Create a password</label>
          <div className="password-wrapper">
            <input
              className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggle-password">
              <Eye />
            </span>
          </div>
          <label>Confirm your password</label>
          <div className="password-wrapper">
            <input
              type="password"
              className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
              name="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="toggle-password">
              <Eye />
            </span>
          </div>

          <label className="">
            <input type="checkbox" name="terms" className="" />
            <span> I have read and agree to the </span>
            <Link className="text-yellow-400" href="/Terms">
              <span className="text-yellow-500">Terms</span>
            </Link>
          </label>

          <input type="hidden" name="timestamp" />
          <button type="submit" className="change-button" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          {message && <p className="text-center mt-3 font-semibold text-yellow-500">{message}</p>}
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
