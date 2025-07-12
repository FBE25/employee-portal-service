// app/entry-permit/page.tsx
"use client";

import { useState } from "react";

export default function EntryPermitPage() {
  const [parkingRequired, setParkingRequired] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-amber-900 mb-1">Entry Permit Request</h1>
        <p className="text-sm text-gray-600 mb-6">Submit a visitor entry permit request</p>

        {/* Employee Information */}
        <section className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold text-amber-900 flex items-center mb-4">
            <i className="ri-user-line mr-2" /> Employee Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Fatma Alkuwari" disabled className="input" />
            <input type="text" placeholder="Information System" disabled className="input" />
            <input type="text" placeholder="Building A - Floor 3 - Room 312" disabled className="input" />
            <input type="text" placeholder="+974 4444 5555 Ext: 312" disabled className="input" />
          </div>
        </section>

        {/* Visitor Information */}
        <section className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold text-amber-900 flex items-center mb-4">
            <i className="ri-user-add-line mr-2" /> Visitor Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Enter visitor’s full name" className="input" />
            <select className="input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="text" placeholder="Enter company or organization name" className="input" />
            <input type="text" placeholder="Enter visitor’s contact number" className="input" />
          </div>
        </section>

        {/* Visit Details */}
        <section className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold text-amber-900 flex items-center mb-4">
            <i className="ri-calendar-line mr-2" /> Visit Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" className="input" />
            <input type="time" className="input" />
            <select className="input">
              <option value="">Select duration</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>
          <textarea
            className="input mt-4"
            rows={4}
            placeholder="Please provide details about the purpose of the visit..."
          />
          <p className="text-xs text-gray-400 text-right">0/500 characters</p>
        </section>

        {/* Parking Requirements */}
        <section className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold text-amber-900 flex items-center mb-4">
            <i className="ri-parking-box-line mr-2" /> Parking Requirements
          </h2>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={parkingRequired}
              onChange={() => setParkingRequired(!parkingRequired)}
              className="form-checkbox text-amber-600"
            />
            <span>Visitor requires parking space</span>
          </label>
        </section>

        {/* Additional Notes */}
        <section className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold text-amber-900 flex items-center mb-4">
            <i className="ri-file-text-line mr-2" /> Additional Notes
          </h2>
          <textarea
            className="input"
            rows={3}
            placeholder="Any additional information or special requirements..."
          />
        </section>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded shadow">Cancel</button>
          <button className="bg-amber-700 text-white px-6 py-2 rounded shadow hover:bg-amber-800">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
