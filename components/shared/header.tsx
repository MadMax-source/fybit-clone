'use client';

import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <Link href="/trade">Trade</Link>
            </li>
            <li className="menu-item">
              <Link href="/wallet">Wallet</Link>
            </li>
            <li className="menu-item">
              <Link href="/account">Account</Link>
            </li>
            <li className="menu-item">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="menu-item">
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link href="/account/login" className="button login-button">
            Log In
          </Link>
          <Link href="Account/Register" className="fybit-btn">
            Sign Up
          </Link>
        </div>
        {/*
        <div className="theme-toggle">
          <Image src="/images/toggledark.svg" alt="toggler" width={120} height={40} />
        </div>
        */}
      </div>
    </header>
  );
}
