"use client";

import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';

const CreateAccount: React.FC = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ fullname, email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-black flex items-center">
                        Register in <FaUsers className="ml-2" />
                    </span>
                    <span className="text-blue-950 ml-2">MyWealth</span>
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-1">
                    The fastest-growing investment and wealth management company.
                </p>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    +10,000 users trust us.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fullname</label>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                            required
                            placeholder="Enter your fullname"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                            required
                            placeholder="youremail@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                            required
                            placeholder="Create a password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-blue-950 rounded-md hover:bg-blue-950 transition-colors"
                    >
                        Create an account
                    </button>

                    <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
                        This site is protected by Google's{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>{" "}
                        apply.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
