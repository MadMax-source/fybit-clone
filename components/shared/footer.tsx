'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-placeholder">
        <footer className="footer">
          <div className="footer__main">
            <div className="footer-company-follow-us left">
              <div className="footer-company-follow-us">
                <Link href="/">
                  <Image src="/images/logo.svg" alt="logo" width={120} height={40} />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/FYBIT_black_horizontal.png"
                    alt="logo"
                    width={120}
                    height={40}
                    className="hidden"
                  />
                </Link>
              </div>
              <div className="separtor"></div>
              <div className="follow-us">
                <span>FYBIT - PnL leverage crypto trading platform</span>
                <div className="links flex">
                  <Link href="https://t.me/fybit" target="_blank">
                    <Image
                      src="/images/icons/theme/telegramf.png"
                      alt="Telegram"
                      className="icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/fybit" target="_blank">
                    <Image
                      src="/images/icons/theme/facebookf.png"
                      alt="faebook"
                      className="icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link href="https://www.youtube.com/@fybit_com" target="_blank">
                    <Image
                      src="/images/icons/youtube.png"
                      alt="Telegram"
                      className="icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link href="https://twitter.com/fybitcom" target="_blank">
                    <Image
                      src="/images/icons/twitter.png"
                      alt="Twitter"
                      className="icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-menu --en">
              <div className="column">
                <div className="header1">About</div>
                <ul>
                  <li>
                    <Link href="/en/About">About Us</Link>
                  </li>
                  <li>
                    <Link href="/en/Terms">Terms of Services</Link>
                  </li>
                  <li>
                    <Link href="/en/Security">Security</Link>
                  </li>
                  <li>
                    <Link href="/en/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/en/CookiePolicy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <div className="header1">Service</div>
                <ul>
                  <li>
                    <Link href="/en/Faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/en/FeesAndLimits">Fees</Link>
                  </li>
                  <li>
                    <Link href="/en/Rules">Rules</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <div className="header1">Referral Program</div>
                <ul>
                  <li>
                    <Link href="/en/Account/Guide">Guide</Link>
                  </li>

                  <li>
                    <Link href="/en/Account/Rules">Rules</Link>
                  </li>

                  <li>
                    <Link href="/en/Account/ReferralAccount">Referral Account</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <div className="header1">Follow Us</div>
                <ul>
                  <li>
                    <Link href="https://blog.fybit.com/" target="_blank">
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@fybit_com" target="_blank">
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <Link href="https://facebook.com/fybit" target="_blank">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/fybitcom" target="_blank">
                      X
                    </Link>
                  </li>
                  <Link href="https://t.me/fybit" target="_blank">
                    Telegram
                  </Link>
                </ul>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <Link href="/support" className="support-button">
            <Image
              src="/images/icons/support-linkv3.png"
              alt="Support Icon"
              width={24}
              height={24}
            />
          </Link>
        </footer>
      </div>

      <footer className="footer">
        <p> 2018-2025 FYBIT.COM. v3.0.1</p>
      </footer>
    </div>
  );
}
