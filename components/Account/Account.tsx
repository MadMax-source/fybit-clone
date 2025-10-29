import Link from 'next/link';
import Footer from '../shared/footer';
import Header from '../shared/header';
const Account = ({ session }: { session: any }) => {
  return (
    <div>
      <div>
        <Header session={session} />
      </div>
      <main className="deposit-container">
        <aside className="sidebar desktop-menu">
          <h3 className="text-xl font-semibold">Available Balance</h3>
          <p>BTC: 0</p>
          <p>ETH: 0</p>
          <p>USDT: 0</p>
          <nav>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">Account & Preferences</h3>
            <ul>
              <li>
                <Link href="/Acccount">
                  <span className="text-gray-200 font-normal">Account</span>
                </Link>
              </li>
              <li>
                <Link href="/Acccount/Preferences">
                  <span className="text-gray-200 font-normal">Preferences</span>
                </Link>
              </li>
              <li>
                <Link href="/Acccount/Google2Fa">
                  <span className="text-gray-200 font-normal">Account Security</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <aside className="faq-menu mobile-menu">
          <nav>
            <div className="border border-gray-500 my-4" />
            <h3 className="text-xl font-semibold">Account & Preferences</h3>
            <ul>
              <li>
                <Link href="/Acccount">
                  <span className="text-gray-200 font-normal">Account</span>
                </Link>
              </li>
              <li>
                <Link href="/Acccount/Preferences">
                  <span className="text-gray-200 font-normal">Preferences</span>
                </Link>
              </li>
              <li>
                <Link href="/Acccount/Google2Fa">
                  <span className="text-gray-200 font-normal">Account Security</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className=" faq-content">
          <form className="max-w-md mx-auto  p-8 rounded-2xl  text-white">
            <h2 className="text-2xl font-semibold mb-6 text-white">Change Account Details</h2>

            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium mb-2 text-gray-300">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                className="w-full  border  border-gray-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full  border border-gray-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                disabled
                placeholder="ikram22@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="oldpassword" className="block text-sm font-medium mb-2 text-gray-300">
                Old Password
              </label>
              <input
                id="oldpassword"
                type="password"
                name="oldpassword"
                placeholder="Enter old password"
                className="w-full  border border-gray-500 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="newpassword" className="block text-sm font-medium mb-2 text-gray-300">
                New Password
              </label>
              <input
                id="newpassword"
                type="password"
                name="newpassword"
                placeholder="Enter new password"
                className="w-full  border border-gray-500 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white  rounded-lg py-2 transition"
            >
              Change
            </button>

            <p className="text-gray-400 text-xs mt-6 leading-relaxed">
              You cannot change the email address because it is the login name of your account.
              <br />
              If you want to change the email address, you must register a new account with a new
              email address.
            </p>
          </form>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
