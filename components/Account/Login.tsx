import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import {
  Eye,
  Key,
  LetterText,
  LetterTextIcon,
  Lock,
  LucideLetterText,
  Mail,
  MessageCircleDashed,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <form className="login-form">
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
            <label>Email</label>
            <div className="icon-wrapper">
              <input
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
                className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
                placeholder="Enter your password"
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
              Log In
            </button>
            <p className="forgot-link text-yellow-500 hover:text-yellow-600">
              <Link href="/Account/ForgotPassword">
                <span className="forgot-link">Forgot your password?</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
