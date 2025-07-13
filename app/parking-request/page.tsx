'use client';
import React from 'react';

export default function ParkingRequestPage() {
  return (
    <div className="bg-bgLight min-h-screen py-12 px-10 font-sans">
      <div className="bg-white p-10 rounded-xl shadow border border-gray-200">
        <h1 className="text-3xl font-bold text-primary mb-2">Parking Request</h1>
        <p className="text-sm text-neutralText mb-8">Submit your parking permit request</p>

        {/* Parking Info */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">Parking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="input">
              <option>Select parking type</option>
            </select>
            <input className="input bg-gray-50" value="PR-2024-001" readOnly />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="border text-neutralText border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
              With Parking Permit
            </button>
            <button className="border text-neutralText border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
              Without Parking Permit
            </button>
          </div>
        </div>

        {/* Employee Info */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">Employee Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input className="input bg-gray-50" value="Fatma Alkuwari" readOnly />
            <input className="input" placeholder="Enter your ID number" />
            <input className="input bg-gray-50" value="Information System" readOnly />
            <input className="input md:col-span-2 bg-gray-50" value="Building A - Floor 3 - Room 312" readOnly />
            <input className="input md:col-span-3 bg-gray-50" value="+974 4444 5555 Ext: 312" readOnly />
          </div>
        </div>

        {/* Upload ID */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-4">ID Photo</h2>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded text-center text-sm text-neutralText bg-gray-50">
            <div className="text-4xl mb-2">📷</div>
            <div className="font-semibold">Upload ID Photo</div>
            <div>Drag and drop or click to browse</div>
            <div className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG, PDF (Max 10MB)</div>
          </div>
        </div>

        {/* Car Info */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Car Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input className="input" placeholder="e.g., Toyota, Honda, BMW" />
            <input className="input" placeholder="e.g., Camry, Civic, X5" />
            <input className="input" placeholder="e.g., 2020" />
            <input className="input" placeholder="e.g., White, Black, Silver" />
            <input className="input" placeholder="Enter license plate number" />
            <input className="input" type="date" />
            <input className="input md:col-span-3" placeholder="Enter insurance company name" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="bg-gray-100 text-neutralText px-6 py-2 rounded border hover:bg-gray-200">
            Save Draft
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-[#741234] transition">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
