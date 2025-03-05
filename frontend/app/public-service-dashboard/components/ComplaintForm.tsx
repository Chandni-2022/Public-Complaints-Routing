// components/ComplaintForm.tsx
"use client";

import React, { useState } from 'react';

interface ComplaintFormProps {
    onSubmitComplaint: (complaintData: any) => void; // Define type later
    onCancel: () => void;
    isSubmitting: boolean;
}

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmitComplaint, onCancel, isSubmitting }) => {
    const [complaintName, setComplaintName] = useState("");
    const [complaintDescription, setComplaintDescription] = useState("");
    const [complaintImage, setComplaintImage] = useState<File | null>(null);
    const [department, setDepartment] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setComplaintImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const imageUrl = complaintImage ? URL.createObjectURL(complaintImage) : "/placeholder.svg?height=80&width=150"; // Placeholder if no image
        const complaintData = {
            name: complaintName,
            description: complaintDescription,
            image: imageUrl,
            department: department,
        };
        onSubmitComplaint(complaintData); // Pass data to parent component
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Register Complaint</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="complaintName" className="block text-gray-700 text-sm font-bold mb-2">
                            Complaint Name
                        </label>
                        <input
                            type="text"
                            id="complaintName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={complaintName}
                            onChange={(e) => setComplaintName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="complaintDescription" className="block text-gray-700 text-sm font-bold mb-2">
                            Complaint Description
                        </label>
                        <textarea
                            id="complaintDescription"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                            value={complaintDescription}
                            onChange={(e) => setComplaintDescription(e.target.value)}
                            required
                        />
                    </div>
                    {/* Department Selection */}
                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
                            Department
                        </label>
                        <select
                            id="department"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="Roads & Infrastructure">Roads & Infrastructure</option>
                            <option value="Drainage & Water">Drainage & Water</option>
                            <option value="Street Lighting">Street Lighting</option>
                            <option value="Waste Management">Waste Management</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="complaintImage" className="block text-gray-700 text-sm font-bold mb-2">
                            Complaint Image (Optional)
                        </label>
                        <input
                            type="file"
                            id="complaintImage"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div className="text-sm text-gray-500 mt-1">
                            {complaintImage ? complaintImage.name : "No file chosen"}
                        </div>
                        {complaintImage && (
                            <div className="mt-2 bg-black">
                                {/* <Image
                                    src={URL.createObjectURL(complaintImage) || "/placeholder.svg"}
                                    alt="Preview"
                                    width={100}
                                    height={50}
                                    className="object-cover rounded-md shadow-sm"
                                /> */}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Registering..." : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComplaintForm;