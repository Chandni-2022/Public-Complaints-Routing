// components/ComplaintTable.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Complaint } from '../page'; // Import Complaint interface from page.tsx

interface ComplaintTableProps {
    reportedProblems: Complaint[];
}

const ComplaintTable: React.FC<ComplaintTableProps> = ({ reportedProblems }) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Recently Reported Problems
            </h2>

            <div className="overflow-x-auto bg-white rounded-md shadow-md">
                <table className="min-w-full table-auto ">
                    <thead className="bg-blue-700">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Sr. No.
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Image
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Department
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {reportedProblems.map((problem: Complaint) => (
                            <tr key={problem.id} className="even:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{problem.name}</td>
                                <td className="px-4 py-4 text-sm text-gray-900">{problem.description}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <Image
                                        src={problem.image || "/placeholder.svg"}
                                        alt={`Report for ${problem.name}`}
                                        width={100}
                                        height={50}
                                        className="object-cover rounded-md"
                                    />
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {problem.department}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ComplaintTable;