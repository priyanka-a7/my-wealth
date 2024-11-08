"use client";

import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-black flex items-center">
                        <FaUsers className="ml-2" />
                    </span>
                    <span className="text-blue-950 ml-2">MyWealth</span>
                </h1>
                <p className="mb-3 text-black-950">Login to your account</p>
                <p className="mb-1 text-gray-600">The fastest-growing investment and wealth management company.</p>
                <p className="mb-6 text-gray-600 flex items-center justify-center">
                    <FaUsers className="mr-2" />+10,000 users trust us.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="youremail@example.com"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-950 rounded-md hover:bg-blue-950 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
