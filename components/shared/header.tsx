'use client';

import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Fybit Logo"
              width={120}
              height={40}
              className="block dark:hidden"
            />
          </Link>
        </div>
        <div className="light-logo">
          <Link href="/">
            <Image
              src="/images/FYBIT_black_horizontal.png"
              alt="Fybit Light Logo"
              width={120}
              height={40}
              className="hidden dark:block"
            />
          </Link>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="menu-item">
              <Link href="/Chart">Trade</Link>
            </li>
            <li className="menu-item">
              <Link href="/Account/Deposit">Wallet</Link>
            </li>
            <li className="menu-item">
              <Link href="/Account">Account</Link>
            </li>
            <li className="menu-item">
              <Link href="/Faq">FAQ</Link>
            </li>
            <li className="menu-item">
              <Link href="/Support">Support</Link>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link href="/Account/Login" className="button login-button">
            Log In
          </Link>
          <Link href="/Account/Register" className="fybit-btn">
            Sign Up
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-td border-gray-200 border-gray-800 shadow-lg">
          <div className="flex items-right justify-end   gap-3 py-4 px-4 ">
            <Link
              href="/Account/Login"
              onClick={() => setMenuOpen(false)}
              className=" text-center border p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition button login-button"
            >
              Log In
            </Link>
            <Link
              href="/Account/Register"
              onClick={() => setMenuOpen(false)}
              className="text-white bg-yellow-400 p-3 rounded-md hover:bg-yellow-700 "
            >
              <span className="text-white">Sign Up</span>
            </Link>
          </div>
          <nav className="flex flex-col items-center text-xl gap-4 py-6">
            <Link
              href="/Chart"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Trade
            </Link>
            <Link
              href="/Account/Deposit"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Wallet
            </Link>
            <Link
              href="/Account"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Account
            </Link>
            <Link
              href="/Faq"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              FAQ
            </Link>
            <Link
              href="/Support"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
