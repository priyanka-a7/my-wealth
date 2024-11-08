import Link from 'next/link';
import React from 'react';
import { FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
          <span className="text-black flex items-center">
            Register in <FaUsers className="ml-2" />
          </span>
          <span className="text-blue-950 ml-2">MyWealth</span>
        </h1>
        <p className="mb-1 text-gray-600">The fastest-growing investment and wealth management company.</p>
        <p className="mb-6 text-gray-600 flex items-center justify-center">
          <FaUsers className="mr-2" />+10,000 users trust us.
        </p>
        <div className="flex flex-col space-y-4 text-left">
          <label className="text-xs font-medium text-gray-900" htmlFor="code">
            Referral Code*
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              id="code"
              type="text"
              name="referralCode"
              placeholder="REFERRAL01MCO"
              required
            />
          </div>

          <div className="flex flex-col mt-6 space-y-4">
            <Link href="./createaccount">
              <p className="w-full py-2 px-4 text-black-600 border border-black rounded-md hover:bg-blue-950 hover:text-white transition text-center">Skip</p>
            </Link>
            <Link href="./createaccount">
              <p className="w-full py-2 px-4 text-white text-center bg-blue-950 rounded-md hover:bg-blue-950 transition">Next</p>
            </Link>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500 flex items-center justify-center">
          <p>
            This site is protected by Google's
            <Link href="#" className="text-blue-600 ml-1 hover:underline">Privacy Policy</Link>
            and
            <Link href="#" className="text-blue-600 ml-1 hover:underline">Terms of Service</Link>
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
