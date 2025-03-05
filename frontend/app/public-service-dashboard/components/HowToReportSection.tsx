// components/HowToReportSection.tsx
"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HowToReportSection: React.FC = () => {
    const [isHowToReportOpen, setIsHowToReportOpen] = useState(true);

    const toggleHowToReport = () => {
        setIsHowToReportOpen(!isHowToReportOpen);
    };

    return (
        <section className="bg-white rounded-md shadow-md mb-8 overflow-hidden">
            <div
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={toggleHowToReport}
            >
                <h2 className="text-2xl font-semibold text-gray-800">How to Report a Problem</h2>
                <button className="focus:outline-none">
                    {isHowToReportOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
            {isHowToReportOpen && (
                <div className="p-6 border-t border-gray-200">
                    <ol className="list-decimal pl-6 text-gray-700">
                        <li className="mb-2">Enter a location to find issues nearby.</li>
                        <li className="mb-2">Describe the problem clearly and provide as much detail as possible.</li>
                        <li>Your complaint will be analyzed and routed to the responsible authority for prompt resolution.</li>
                    </ol>
                </div>
            )}
        </section>
    );
};

export default HowToReportSection;