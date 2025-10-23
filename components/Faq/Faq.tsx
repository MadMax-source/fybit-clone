import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import Link from 'next/link';
import Image from 'next/image';

const Faq = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="faq-container">
        <nav className="faq-menu desktop-menu">
          <ul>
            <li>
              <Link href="/Faq/GettingStarted" className="faq-category-button">
                <span>Getting Started</span>
              </Link>
            </li>
            <li>
              <Link href="/Faq/DepositWithdrawal" className="faq-category-button">
                <span>Deposit / Withdrawal</span>
              </Link>
            </li>
            <li>
              <Link href="/Faq/Trading" className="faq-category-button">
                <span>Trading</span>
              </Link>
            </li>
            <li>
              <Link href="/Faq/Chart" className="faq-category-button">
                <span>Chart</span>
              </Link>
            </li>
            <li>
              <Link href="/Faq/Account" className="faq-category-button">
                <span>Account</span>
              </Link>
            </li>
            <li>
              <Link href="/Faq/AffiliateProgram" className="faq-category-button">
                <span>Referral Program</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="faq-content">
          <div className="header-image">
            <Image src="/images/icons/faq.png" alt="FAQ Header Image" width={40} height={40} />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search help articles" />
            <div className="search-results hidden"></div>
          </div>
          <div className="category-grid">
            <div className="category-card">
              <h3>Getting Started</h3>
              <ul>
                <li>
                  <Link href="/Faq/GettingStarted">
                    <span>How do I create an account</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/GettingStarted">
                    <span>How do enable 2FA?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/GettingStarted">
                    <span>How can I make a deposite?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/GettingStarted">
                    <span>How do I place an order?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/GettingStarted">
                    <span>How to close a position?</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Deposit / Withdrawal</h3>
              <ul>
                <li>
                  <Link href="/Faq/DepositWithdrawal">
                    <span>How can I make a deposite?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/DepositWithdrawal">
                    <span>What is the minimum deposit amount?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/DepositWithdrawal">
                    <span>How long does it take to make a deposit?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/DepositWithdrawal">
                    <span>What if I send funds to someone else's</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/DepositWithdrawal">
                    <span>How can I make a deposite?</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Trading</h3>
              <ul>
                <li>
                  <Link href="/Faq/Trading">
                    <span>How do I place an order?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Trading">
                    <span>Are market order fees higher than limit order fees?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Trading">
                    <span>Are market order fees higher than limit order fees?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Trading">
                    <span>How do I place buy limit orders?</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Chart</h3>
              <ul>
                <li>
                  <Link href="/Faq/Chart">
                    <span>Where do you get the quotes from?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/Chart">
                    <span>How do I enlarge the chart?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/Chart">
                    <span>Where is the price value on the chart?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/Chart">
                    <span>Do you have a countdown function?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/Chart">
                    <span>How do I return the chart to the default settings?</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Account</h3>
              <ul>
                <li>
                  <Link href="/Faq/Account">
                    <span>How do I create an account?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Account">
                    <span>I forgot my password, how can I change it?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Account">
                    <span>How to enable 2FA?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Faq/Account">
                    <span>
                      Why is 2FA not working when I log in to my account, after I enabled it?
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Referral Program</h3>
              <ul>
                <li>
                  <Link href="/Faq/AffiliateProgram">
                    <span>What is the Referral program?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/AffiliateProgram">
                    <span>How much will I get for each targeted action?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/AffiliateProgram">
                    <span>What traffic sources can I use?</span>
                  </Link>
                </li>

                <li>
                  <Link href="/Faq/AffiliateProgram">
                    <span>When are referrals paid?</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
