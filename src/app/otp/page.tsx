"use client";

import React, { useState } from 'react';

const OTPPage: React.FC = () => {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ otp });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
                <p className="text-gray-600">We sent you a one-time password (OTP). Enter it below to verify.</p>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Enter OTP</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter OTP"
                            maxLength={6}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-950 rounded-md hover:bg-blue-950 transition"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTPPage;
