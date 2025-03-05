// components/Header.tsx
"use client";

import React from 'react';

interface HeaderProps {
    onReportComplaintClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReportComplaintClick }) => {
    return (
        <header className="bg-blue-700 py-6 px-4 shadow-md">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-white text-center">
                    AI-Enabled Public Service Complaint Dashboard
                </h1>
                <p className="text-lg text-gray-100 text-center mt-2">
                    Analyze, Route, and Resolve Public Issues Efficiently
                </p>

                <div className="flex justify-center mt-2 gap-3">
                    <button
                        type="button"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={onReportComplaintClick}
                    >
                        Report Complaint
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;