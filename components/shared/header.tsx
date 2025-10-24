'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguageOpen(!languageOpen);

  const languages = [
    { name: 'English', flag: '/svg/english.png' },
    { name: 'Dutch', flag: '/svg/germany.png' },
    { name: 'Español', flag: '/svg/spain.png' },
    { name: 'Netherlands', flag: '/svg/netherland.png' },
  ];

  const handleLanguageSelect = (lang: string) => {
    setSelectedLang(lang);
    setLanguageOpen(false);
  };

  const selectedFlag =
    languages.find((lang) => lang.name === selectedLang)?.flag || '/flags/gb.svg';

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
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

        {/* Desktop Navigation */}
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

        {/* Buttons */}
        <div className="header-buttons flex items-center gap-3 relative">
          <Link href="/Account/Login" className="button login-button">
            Log In
          </Link>
          <Link href="/Account/Register" className="bg-yellow-500 hover:bg-yellow-600 p-3  rounded">
            <span className="text-white">Sign Up</span>
          </Link>

          <div className="relative">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 p-2 rounded-md border border-gray-300 border-gray-700  hover:bg-gray-800 transition"
            >
              <Image
                src={selectedFlag}
                alt={selectedLang}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{selectedLang}</span>
              <ChevronDown size={16} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <button
                        onClick={() => handleLanguageSelect(lang.name)}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={18}
                          height={18}
                          className="rounded-full"
                        />
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ☀️ Mode Toggle Button */}
          <button
            onClick={toggleMode}
            className="p-2 rounded-md  dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 shadow-lg pb-4">
          <div className="flex items-right justify-end gap-3 py-4 px-4">
            <Link
              href="/Account/Login"
              onClick={() => setMenuOpen(false)}
              className="text-center border p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition button login-button"
            >
              Log In
            </Link>
            <Link
              href="/Account/Register"
              onClick={() => setMenuOpen(false)}
              className="text-white bg-yellow-400 p-3 rounded-md hover:bg-yellow-700"
            >
              <span className="text-white">Sign Up</span>
            </Link>
            <button
              onClick={toggleMode}
              className="p-2 rounded-md  dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>

          <nav className="flex flex-col items-center text-xl gap-4 py-6">
            <Link href="/Chart" onClick={() => setMenuOpen(false)}>
              Trade
            </Link>
            <Link href="/Account/Deposit" onClick={() => setMenuOpen(false)}>
              Wallet
            </Link>
            <Link href="/Account" onClick={() => setMenuOpen(false)}>
              Account
            </Link>
            <Link href="/Faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/Support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
          </nav>
          <div className="border border-gray-500 my-3"></div>
          <div className="relative  flex items-center justify-center w-full ">
            <button
              onClick={toggleLanguage}
              className="flex  w-4/5 justify-center items-center gap-2 p-2 rounded-md border border-gray-300 border-gray-700  hover:bg-gray-800 transition"
            >
              <Image
                src={selectedFlag}
                alt={selectedLang}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{selectedLang}</span>
              <ChevronDown size={16} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <button
                        onClick={() => handleLanguageSelect(lang.name)}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={18}
                          height={18}
                          className="rounded-full"
                        />
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/*

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

*/
