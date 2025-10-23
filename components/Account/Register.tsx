import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { Eye } from 'lucide-react';
import Link from 'next/link';

const Register = () => {
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
        <form>
          <label>Full name</label>
          <input
            className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
            name="fullname"
          />
          <label>Email</label>
          <input
            className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
            name="email"
          />
          <label>Create a password</label>
          <div className="password-wrapper">
            <input
              className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
              name="password"
            />
            <span className="toggle-password">
              <Eye />
            </span>
          </div>
          <label>Confirm your password</label>
          <div className="passowrd-wrapper">
            <input
              type="passwrd"
              className="border border-gray-300  rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 my-1"
              name="confirmpassword"
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
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
