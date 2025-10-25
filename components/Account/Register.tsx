'use client';
import React, { useState } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple UI-only flow
    if (fullname && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setMessage('⚠️ Passwords do not match.');
        return;
      }

      setMessage('🎉 Congratulations! You have registered successfully.');
      setTimeout(() => {
        router.push('/Account/Login');
      }, 2000);
    } else {
      setMessage('⚠️ Please fill all the fields.');
    }
  };

  return (
    <div>
      <div>
        <Header />
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
          <button type="submit" className="change-button">
            Sign Up
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
