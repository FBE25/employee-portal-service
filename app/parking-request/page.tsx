'use client';
import React from 'react';

export default function ParkingRequestPage() {
  return (
    <div className="bg-amber-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-amber-950 mb-1">Parking Request</h1>
      <p className="text-amber-900 mb-6">Submit your parking permit request</p>

      <div className="bg-white p-6 rounded shadow-md space-y-8">
        {/* Parking Info */}
        <div>
          <h2 className="text-lg font-semibold text-amber-900 mb-4">Parking Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <select className="input">
              <option>Select parking type</option>
            </select>
            <input className="input" value="PR-2024-001" readOnly />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="border rounded px-4 py-2">With Parking Permit</button>
            <button className="border rounded px-4 py-2">Without Parking Permit</button>
          </div>
        </div>

        {/* Employee Info */}
        <div>
          <h2 className="text-lg font-semibold text-amber-900 mb-4">Employee Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" value="Fatma Alkuwari" readOnly />
            <input className="input" placeholder="Enter your ID number" />
            <input className="input" value="Information System" readOnly />
            <input className="input" value="Building A - Floor 3 - Room 312" readOnly />
            <input className="input" value="+974 4444 5555 Ext: 312" readOnly />
          </div>
        </div>

        {/* Upload ID */}
        <div>
          <h2 className="text-lg font-semibold text-amber-900 mb-4">ID Photo</h2>
          <div className="border-2 border-dashed p-6 rounded text-center text-sm text-amber-700">
            <div className="text-4xl mb-2">📷</div>
            <div className="font-semibold">Upload ID Photo</div>
            <div>Drag and drop or click to browse</div>
            <div className="text-xs text-gray-500">Supported formats: JPG, PNG, PDF (Max 10MB)</div>
          </div>
        </div>

        {/* Car Info */}
        <div>
          <h2 className="text-lg font-semibold text-amber-900 mb-4">Car Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" placeholder="e.g., Toyota, Honda, BMW" />
            <input className="input" placeholder="e.g., Camry, Civic, X5" />
            <input className="input" placeholder="e.g., 2020" />
            <input className="input" placeholder="e.g., White, Black, Silver" />
            <input className="input" placeholder="Enter license plate number" />
            <input className="input" type="date" />
            <input className="input col-span-2" placeholder="Enter insurance company name" />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300">Save Draft</button>
          <button className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">Submit Request</button>
        </div>
      </div>
    </div>
  );
}
