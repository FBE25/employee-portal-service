'use client';
import { useState } from 'react';

export default function MaintenanceRequest() {
  const [priority, setPriority] = useState('Medium');

  return (
    <div className="p-8 bg-yellow-50 min-h-screen">
      <h1 className="text-2xl font-bold text-amber-900 mb-1">Maintenance Request</h1>
      <p className="text-sm text-amber-800 mb-6">Submit your facility maintenance request</p>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Requester Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Employee Name</label>
            <input type="text" value="Fatma Alkuwari" className="input" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Request Number</label>
            <input type="text" value="MR-2024-001" className="input" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Department</label>
            <input type="text" value="Information System" className="input" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Office Location</label>
            <input type="text" value="Building A - Floor 3 - Room 312" className="input" readOnly />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-amber-900 mb-1">Office Phone</label>
            <input type="text" value="+974 4444 5555 Ext: 312" className="input" readOnly />
          </div>
        </div>

        {/* Maintenance Details */}
        <div>
          <h2 className="text-lg font-semibold text-amber-900 mb-4">Maintenance Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1">Issue Type</label>
              <select className="input">
                <option>Select issue type</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1">Priority Level</label>
              <div className="flex space-x-2 mt-1">
                {['Low', 'Medium', 'High', 'Urgent'].map((level) => (
                  <button
                    key={level}
                    className={`px-3 py-1 rounded-full text-sm ${
                      priority === level
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setPriority(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-amber-900 mb-1">Specific Location</label>
              <input
                type="text"
                placeholder="e.g., Near printer station, Conference room entrance"
                className="input"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-amber-900 mb-1">Attach Files</label>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-8 text-center text-gray-500 text-sm">
                <div className="text-4xl mb-2">📤</div>
                <p>Click to upload files or drag and drop</p>
                <p className="text-xs mt-1">PNG, JPG, PDF up to 10MB each</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-amber-900 mb-1">Comments Section</label>
              <textarea
                placeholder="Please describe the maintenance issue in detail, including when it started and any specific symptoms..."
                className="input h-28 resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">Describe the issue, urgency, and any relevant details</p>
              <p className="text-xs text-right text-gray-400 mt-1">0/500</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">Save Draft</button>
          <button className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

